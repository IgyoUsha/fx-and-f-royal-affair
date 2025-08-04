-- Create RSVP table to store wedding RSVP data
CREATE TABLE public.rsvp (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  attendance TEXT NOT NULL CHECK (attendance IN ('yes', 'no')),
  guest_count INTEGER DEFAULT 1,
  special_dietary_needs BOOLEAN DEFAULT false,
  dietary_restrictions TEXT,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rsvp ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert RSVPs (public form)
CREATE POLICY "Allow public RSVP submissions" 
ON public.rsvp 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone to read RSVPs (for admin dashboard - will be restricted by auth in app)
CREATE POLICY "Allow reading RSVPs" 
ON public.rsvp 
FOR SELECT 
TO anon, authenticated
USING (true);

-- Enable real-time updates
ALTER TABLE public.rsvp REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.rsvp;