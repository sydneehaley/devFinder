import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/jobs/Layout';
import Jumbotron from '../../components/jobs/Jumbotron';
const Jobs: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>devFinder</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Jumbotron />
    </Layout>
  );
};

export default Jobs;
