import List from '../components/List';
import Filters from '../components/Filters';
import prisma from '../lib/prisma/client/client';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default async function Home() {
  // const jobs = await prisma.jobs.findMany();

  return (
    <div className='w-full flex  items-center justify-center'>
      <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
        <Filters />
        {/* <List data={data} /> */}
      </div>
    </div>
  );
}
