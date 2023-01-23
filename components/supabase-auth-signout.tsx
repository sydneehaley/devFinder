import { useSupabase } from './supabase-provider';

export const signOut = async () => {
  const { supabase } = useSupabase();
  const { error } = await supabase.auth.signOut();
  console.log({ error });
};
