import List from './List';
import { createServerClient } from '../utils/supabase-server';

export default async function Jobs() {
  const supabase = createServerClient();
  const { data, error } = await supabase?.from('test').select('*');

  return <List data={data} />;
}
