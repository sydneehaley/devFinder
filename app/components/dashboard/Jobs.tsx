// 'use client';

import List from './List';
import useSWR, { SWRConfig } from 'swr';
import type { Fetcher, Key } from 'swr';
import axios from 'axios';

// type Jobs = any;
// const url: Key = '/api/jobs';

// const getJobs = async (url: string) => {
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const fetcher: Fetcher<Jobs, string> = (...args) => getJobs(...args);

// export default function JobsList() {
//   const { data, error } = useSWR('api/jobs', fetcher);
//   console.log('Is data ready?', !!data);
//   console.log(data?.data);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;

//   return (
//     <div className='w-[82%] flex flex-col items-start justify-start my-[5rem]'>
//       <List data={data?.data} />
//     </div>
//   );
// }

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getJobs();

  return (
    <div className='w-[82%] flex flex-col items-start justify-start my-[5rem]'>
      <List data={data?.data} />
    </div>
  );
}
