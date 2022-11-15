import type { NextPage } from 'next';
import useJobs from '../../hooks/useJobs';
import useSWR, { Key, SWRConfig } from 'swr';
import type { SWRConfiguration } from 'swr';
const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = `${server}/api/jobs`;

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

const config: SWRConfiguration = {
  fallbackData: 'fallback',
  revalidateOnMount: false,
  // ...
};

const JobsList = () => {
  const { data } = useSWR<any[]>(API, fetcher, config);

  // there should be no `undefined` state
  console.log('Is data ready?', !!data);
  console.log(data);

  return (
    <div className='w-[82%] flex flex-col items-start justify-start'>
      <div>
        <h1>Jobs</h1>
      </div>
      <div>
        {data?.map((job, i) => (
          <ul className='p-0 m-0'>
            <li>
              <div>
                <h6>{job.title}</h6>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
