import Jobs from './Jobs';
import Filters from '../components/Filters';
import { createServerClient } from '../utils/supabase-server';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='w-[80%] flex  justify-center my-[5rem] antialiased'>
      {/* @ts-expect-error Server Component */}
      <Jobs />
    </div>
  );
}
