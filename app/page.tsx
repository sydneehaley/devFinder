import Navbar from '../components/Navbar';
import List from '../components/List';
import { getJobs } from './data/jobs';
import { data } from './data/test_jobs';

export default async function Index() {
  // const data = await getJobs(`${process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS}
  return (
<<<<<<< HEAD
    <div className='w-full text-neutral flex flex-col items-center justify-center'>
=======
    <div className='w-full  flex flex-col items-center justify-center text-neutral-600 dark:text-neutral-500 antialiased font-theme'>
>>>>>>> 36ade5e (general ui updates)
      <Navbar />
      <div className='w-full'>
        <List data={data} />
      </div>
    </div>
  );
}
