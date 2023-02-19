import 'server-only';
import { createServerClient } from '../../utils/supabase-server';

import Jobs from './jobs';
import List from '../../components/List';
export const revalidate = 0;

const getData = async (path: string) => {
  const API_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error();
  }

  return res.json();
};

export default async function Dashboard() {
  // const supabase = createServerClient();
  // const { data } = await supabase.from('test').select('*');
  const data = await getData('/api/jobs');
  console.log(data);

  return (
    <div className='w-[80%] flex flex-col items-center justify-center my-[3rem] antialiased'>
      {/* <Jobs serverPosts={data || []} /> */}
      <List data={data} />
    </div>
  );
}
