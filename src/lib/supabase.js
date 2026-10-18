import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://jasufjmqtidcwlbdrydr.supabase.co";

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphc3Vmam1xdGlkY3dsYmRyeWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzMjQwNDksImV4cCI6MjEwNzkwMDA0OX0.w7P4XXApf9f_GzYzPo4gFeBnChJitBpCupdugrflPhc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
