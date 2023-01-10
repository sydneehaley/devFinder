import List from './components/List';
import Filters from './components/Filters';
import prisma from '../lib/prisma/client/client';

// async function getJobs() {
//   const dev = process.env.NODE_ENV !== 'production';
//   const res = await fetch('http://localhost:3000/api/jobs');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export default async function Home() {
  const data = await prisma.jobs.findMany();

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
        <Filters />
        <List data={data} />;
      </div>
    </div>
  );
}
