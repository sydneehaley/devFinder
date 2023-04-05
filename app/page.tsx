import Navbar from '../components/Navbar';
import List from '../components/List';
import { getJobs } from './data/jobs';

export default async function Index() {
  const url =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS_DEV || ''
      : process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS || '';
  console.log(url);
  const data = await getJobs(url);

  return (
    <div className='w-full text-neutral flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-full'>
        <List data={data} />
      </div>
    </div>
  );
}
