import List from '../components/List';
import Filters from '../components/Filters';
import prisma from '../lib/prisma/client/client';
import Navbar from '../components/Navbar';
import '../dist/output.css';

export default async function Home() {
  const jobs = await prisma.jobs.findMany();

  return (
    <div className='w-full bg-zinc-800 text-[#bbbbbb] flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
        <Filters />
        <List data={jobs} />
      </div>
    </div>
  );
}
