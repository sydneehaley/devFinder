import Navbar from '../components/Navbar';
import List from '../components/List';
import { createServerClient } from '../utils/supabase-server';
import { getJobs } from './data/jobs';

export default async function Index() {
  const data = await getJobs('https://devfinder-client-api.herokuapp.com/api/jobs?populate=*');

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-[80%] flex  justify-center my-[5rem] antialiased'>
        <List data={data} />
      </div>
    </div>
  );
}
