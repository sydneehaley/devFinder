import { createBrowserClient } from '../utils/supabase-browser';

export const signOut = async () => {
  const supabase = createBrowserClient();
  const { error } = await supabase.auth.signOut();
  console.log({ error });
};
