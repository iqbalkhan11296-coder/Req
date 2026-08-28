const SUPABASE_URL = "https://ntnmpyogqzstrdbbmmhw.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_NO6geq5jNkrGgdM4qdKgeg_oLFWbfKX";

const { createClient } = supabase;

const db = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

window.db = db;
