import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://iidwdgddfcjbjvcoqtkm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZHdkZ2RkZmNqYmp2Y29xdGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjY2MTUsImV4cCI6MjAyMzQwMjYxNX0.Gl6G4u-JmthRzyKyLsfD8h_t0o-zdLtlg8lCrVlAFyc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
