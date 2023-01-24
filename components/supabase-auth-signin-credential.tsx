import { createBrowserClient } from '../utils/supabase-browser';

export const signInCredential = async (email: string, password: string) => {
  const supabase = createBrowserClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log({ data, error });
};
