import List from './List';
import Filters from '../components/Filters';
import { createServerClient } from '../utils/supabase-server';
import Navbar from '../components/Navbar';

export default async function Home() {
  const supabase = createServerClient();
  const { data, error } = await supabase?.from('test').select('*');

  return (
    <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
      <Filters />
      <List data={data} />
    </div>
  );
}
