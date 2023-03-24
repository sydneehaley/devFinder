'use client';
import Navbar from '../components/Navbar';
import List from '../components/List';
import { getJobs } from '../app/data/jobs';

export default async function Home() {
  const data = await getJobs(`${process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS}`);
  console.log(data);
  return (
    <div className='w-full text-neutral flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-full'>
        <List data={data?.data} />
      </div>
    </div>
  );
}
