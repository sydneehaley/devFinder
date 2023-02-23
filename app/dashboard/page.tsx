import 'server-only';
import { createServerClient } from '../../utils/supabase-server';
import { getJobs } from '../data/jobs';
import List from '../../components/List';

export const revalidate = 0;

export default async function Dashboard() {
  // const supabase = createServerClient();
  // const { data } = await supabase.from('test').select('*');
  const data = await getJobs('https://devfinder-client-api.herokuapp.com/api/jobs?populate=*');

  return (
    <div className='w-[80%] flex flex-col items-center justify-center my-[3rem] antialiased'>
      {/* <Jobs serverPosts={data || []} /> */}
      <List data={data} />
    </div>
  );
}
