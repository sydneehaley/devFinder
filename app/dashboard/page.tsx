import Navbar from '../components/dashboard/Navbar';
import Search from '../components/dashboard/Search';
import useSWR, { SWRConfig } from 'swr';
import Filters from '../components/dashboard/Filters';
import List from '../components/dashboard/List';
import { InferGetServerSidePropsType } from 'next';
import type { Fetcher, Key } from 'swr';
import axios from 'axios';

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs', { next: { revalidate: 10 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Jobs() {
  const data = await getJobs();

  return <List data={data} />;
}

export default function Dashboard() {
  return (
    <div className='w-[82%] flex flex-col items-center justify-center my-[5rem] antialiased'>
      {/* @ts-expect-error Server Component */}
      <Jobs />
    </div>
  );
}
