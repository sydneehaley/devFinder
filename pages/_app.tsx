import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../dist/output.css';
import useSWR, { SWRConfig } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = '/api/jobs';

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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
