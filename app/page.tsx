import Navbar from '../components/Navbar';
import Home from '../components/Home';
import { redirect } from 'next/navigation';
import { createServerClient } from '../utils/supabase-server';

export default async function Index() {
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    redirect('/dashboard');
  }
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <Home />
    </div>
  );
}
