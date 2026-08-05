import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ffxclvtjuxuxclxzwbzh.supabase.co";

const supabasePublishableKey =
  "sb_publishable_2iXRKxgXly4zrwyWxJ9uQQ_5ZTqEQwG";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);