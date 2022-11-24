import Head from 'next/head';
import Layout from '../../components/jobs/Layout';
import Search from '../../components/jobs/Search';
import useSWR, { SWRConfig } from 'swr';
import Filters from '../../components/jobs/Filters';
import List from '../../components/jobs/List';
import { InferGetServerSidePropsType } from 'next';
import type { Fetcher, Key } from 'swr';

const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://dev-finder-sydneehaley.vercel.app/';
let API = `${server}/api/jobs`;

// if (global.window) {
//   API = '/api/jobs';
// }

type Jobs = any;
const fetcher: Fetcher<Jobs, string> = (...args) => fetch(...args).then((res) => res.json());

export async function getServerSideProps() {
  const jobs = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: jobs,
      },
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch(API);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

interface Props {
  data: any;
}

// const JobsList: React.FC<Props> = ({ data }) => {
//   // const { data } = useSWR<any[]>('/api/jobs', fetcher);
//   // console.log('Is data ready?', !!data);
//   console.log(data);

//   return (
//     <div className='w-[82%] flex flex-col items-start justify-start'>
//       <List data={data} />
//     </div>
//   );
// };

function JobsList() {
  const { data } = useSWR<any[]>(API);
  console.log('Is data ready?', !!data);
  console.log(data);
  console.log(API);

  return (
    <div className='w-[82%] flex flex-col items-start justify-start'>
      <List data={data} />
    </div>
  );
}

// function Jobs({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <Layout>
//       <Head>
//         <title>devFinder</title>
//         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//       </Head>

//       <div className='w-[82%] flex my-[5rem]'>
//         <Filters />
//         <JobsList data={data} />
//       </div>
//     </Layout>
//   );
// }

function Jobs({ fallback }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Head>
        <title>devFinder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='w-[82%] flex my-[5rem]'>
        <Filters />
        <SWRConfig value={{ fallback }}>
          <JobsList />
        </SWRConfig>
      </div>
    </Layout>
  );
}

export default Jobs;
