import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

    console.log("Creating Supabase client...");

    // Create Supabase client with service role for inserting data
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log("Inserting lead into database...", { nome, email, telefone: telefone || null, origem_form });

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads_stars_experience')
      .insert({
        nome,
        email,
        telefone: telefone || null,
        origem_form: origem_form || "unknown",
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting lead:", error);
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

    console.log("Lead inserted successfully:", data);

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
