import Navbar from '../components/Navbar';
import Home from '../components/Home';
import { useSupabase } from '../components/supabase-provider';

export default function Index() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
        <Home />
      </div>
    </div>
  );
}
