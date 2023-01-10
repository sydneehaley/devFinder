import Image from 'next/image';
import homePic from '../public/AdobeStock_533814368.png';
import Filters from './Filters';
import List from './List';

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs', { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Jobs() {
  const data = await getJobs();

  return <List data={data} />;
}

export default function Home() {
  return (
    <div className='w-[90%] flex  justify-center my-[5rem] antialiased'>
      <Filters />
      {/* @ts-expect-error Server Component */}
      <Jobs />
    </div>
  );
}
