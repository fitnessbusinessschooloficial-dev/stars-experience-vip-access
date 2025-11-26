import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadRequest {
  nome: string;
  email: string;
  telefone: string;
  origem_form: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, telefone, origem_form }: LeadRequest = await req.json();

    // Validate required fields
    if (!nome || !email) {
      console.error("Validation error: nome and email are required");
      return new Response(
        JSON.stringify({ error: "Nome e email são obrigatórios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Attempting to connect to MySQL database...");

    // Create MySQL connection
    const client = await new Client().connect({
      hostname: Deno.env.get("MYSQL_HOST") || "127.0.0.1",
      port: parseInt(Deno.env.get("MYSQL_PORT") || "3306"),
      db: Deno.env.get("MYSQL_DATABASE"),
      username: Deno.env.get("MYSQL_USER"),
      password: Deno.env.get("MYSQL_PASSWORD"),
    });

    console.log("MySQL connection established successfully");

    // Insert lead into database
    const query = `
      INSERT INTO leads_stars_experience (nome, email, telefone, origem_form)
      VALUES (?, ?, ?, ?)
    `;

    console.log("Executing insert query...", { nome, email, telefone: telefone || null, origem_form });

    const result = await client.execute(query, [
      nome,
      email,
      telefone || null,
      origem_form || "unknown",
    ]);

    console.log("Lead inserted successfully:", result);

    // Close connection
    await client.close();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Lead cadastrado com sucesso!",
        data: { nome, email, origem_form }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in save-lead function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Erro ao salvar lead. Por favor, tente novamente.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
