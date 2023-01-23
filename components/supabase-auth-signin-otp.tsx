import { useSupabase } from './supabase-provider';

export const signInOtp = async (email: string) => {
  const { supabase } = useSupabase();

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: '/dashboard',
    },
  });
  console.log({ data, error });
};
