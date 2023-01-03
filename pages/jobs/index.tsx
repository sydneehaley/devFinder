import Head from 'next/head';
import Layout from '../../components/jobs/Layout';
import Search from '../../components/jobs/Search';
import useSWR, { SWRConfig } from 'swr';
import Filters from '../../components/jobs/Filters';
import List from '../../components/jobs/List';
import { InferGetServerSidePropsType } from 'next';
import type { Fetcher, Key } from 'swr';

const dev = process.env.NODE_ENV !== 'production';
// const API = dev ? '/api/jobs' : 'https://dev-finder-sydneehaley.vercel.app';
const API = '/api/jobs';

console.log(API);

type Jobs = any;
const fetcher: Fetcher<Jobs, Key> = (url: any) => fetch(url).then((res) => res.json());

async function getServerSideProps() {
  const jobs = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: jobs,
      },
    },
  };
}

function JobsList() {
  const { data, error } = useSWR<any[]>(API, fetcher);
  console.log('Is data ready?', !!data);

  return (
    <div className='w-[82%] flex flex-col items-start justify-start'>
      <List data={data} />
    </div>
  );
}

function Jobs({ fallback }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Head>
        <title>devFinder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='w-[82%] flex my-[5rem]'>
        <Filters />
        {/* <SWRConfig value={{ fallback }}> */}
        <JobsList />
        {/* </SWRConfig> */}
      </div>
    </Layout>
  );
}

export default Jobs;
