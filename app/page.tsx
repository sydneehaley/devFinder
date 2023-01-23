import List from '../components/List';
import Filters from '../components/Filters';
import { createServerClient } from '../utils/supabase-server';

export default async function Home() {
  const supabase = createServerClient();
  const { data, error } = await supabase?.from('test').select('*');

  return (
    <div className='w-full flex  items-center justify-center'>
      <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
        <Filters />
        <List data={data} />
      </div>
    </div>
  );
}
