import Image from 'next/image';
import homePic from '../public/AdobeStock_533814368.png';
import Filters from './Filters';
import List from './List';
import axios from 'axios';

async function getJobs() {
  const dev = process.env.NODE_ENV !== 'production';
  const url = dev ? 'http://localhost:3000/api/jobs' : 'http://dev-finder-sydneehaley.vercel.app';
  // const res = await fetch(url, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return res.json();
  try {
    const res = await axios.get(dev ? 'http://localhost:3000/api/jobs' : 'http://dev-finder-sydneehaley.vercel.app', {
      // headers: {
      //   'Content-Type': 'application/json',
      //   Accept: 'application/json',
      // },
    });
    const jobs = res.data;
    console.log(jobs);
    return { jobs };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
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
