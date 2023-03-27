import Navbar from '../components/Navbar';
import List from '../components/List';
import { getJobs } from './data/jobs';
import { data } from './data/test_jobs';

export default async function Index() {
  // const data = await getJobs(`${process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS}
  return (
    <div className='w-full text-neutral flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-full'>
        <List data={data} />
      </div>
    </div>
  );
}
