import Head from 'next/head';
import Layout from '../../components/jobs/Layout';
import Search from '../../components/jobs/Search';
import useSWR, { SWRConfig } from 'swr';
import List from '../../components/jobs/List';
import { InferGetServerSidePropsType } from 'next';
import type { Fetcher } from 'swr';

const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';
const fetcher: Fetcher<User, string> = (url) => fetch(url).then((res) => res.json());
const API = `${server}/api/jobs`;

type User = any;

export async function getServerSideProps() {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo,
      },
    },
  };
}

const JobsList = () => {
  const { data } = useSWR<any[]>(API);

  // there should be no `undefined` state
  console.log('Is data ready?', !!data);
  console.log(data);
  console.log(typeof data === 'object');

  return (
    <div className='w-[82%] flex flex-col items-start justify-start'>
      <List data={data} />
    </div>
  );
};

function Jobs({ fallback }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Head>
        <title>devFinder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Search />
      <SWRConfig value={{ fallback }}>
        <JobsList />
      </SWRConfig>
    </Layout>
  );
}

export default Jobs;