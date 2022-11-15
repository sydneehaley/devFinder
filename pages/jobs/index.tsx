import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/jobs/Layout';
import Search from '../../components/jobs/Search';
import JobsList from '../../components/jobs/JobsList';

const Jobs: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>devFinder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Search />
      <JobsList />
    </Layout>
  );
};

export default Jobs;
