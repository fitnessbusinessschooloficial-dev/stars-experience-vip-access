-- Create leads table for Stars Experience
CREATE TABLE public.leads_stars_experience (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  origem_form TEXT DEFAULT 'unknown',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index on email for faster lookups
CREATE INDEX idx_leads_stars_experience_email ON public.leads_stars_experience(email);

-- Enable Row Level Security
ALTER TABLE public.leads_stars_experience ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (public form)
CREATE POLICY "Allow public inserts" 
ON public.leads_stars_experience 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow select for service role only (admin access)
CREATE POLICY "Allow service role select" 
ON public.leads_stars_experience 
FOR SELECT 
USING (auth.role() = 'service_role');