import 'server-only';

import { createServerClient } from '../../utils/supabase-server';

import Jobs from './jobs';

export const revalidate = 0;

export default async function Dashboard() {
  const supabase = createServerClient();
  const { data } = await supabase.from('test').select('*');

  return (
    <div className='w-[80%] flex flex-col items-center justify-center my-[5rem] antialiased'>
      <Jobs serverPosts={data || []} />
    </div>
  );
}
