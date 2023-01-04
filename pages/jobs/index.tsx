import Head from 'next/head';
import Layout from '../../components/jobs/Layout';
import Search from '../../components/jobs/Search';
import useSWR, { SWRConfig } from 'swr';
import Filters from '../../components/jobs/Filters';
import List from '../../components/jobs/List';
import { InferGetServerSidePropsType } from 'next';
import type { Fetcher, Key } from 'swr';
import { unstable_serialize } from 'swr/infinite';
import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';
const API = `http://localhost:3000/api/jobs`;
console.log(API);

type Jobs = any;
const url: Key = '/api/jobs';
// const fetcher: Fetcher<Jobs, string> = (...args) => fetch(...args).then((res) => res.json());

const getJobs = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const fetcher: Fetcher<Jobs, string> = (url) => getJobs(url);

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
  const { data, error } = useSWR('api/jobs', fetcher);
  console.log('Is data ready?', !!data);
  console.log(data?.data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className='w-[82%] flex flex-col items-start justify-start'>
      <List data={data?.data} />
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
