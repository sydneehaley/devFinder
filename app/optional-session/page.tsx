import 'server-only';

import { createServerClient } from '../../utils/supabase-server';
// do not cache this page
export const revalidate = 0;

// this page will display with or without a user session
export default async function OptionalSession() {
  const supabase = createServerClient();
  const { data, error } = await supabase?.from('test').select('*');
  console.log({ data, error });

  return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}
