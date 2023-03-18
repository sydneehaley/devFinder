import Navbar from '../components/Navbar';
import List from '../components/List';
import { getJobs } from './data/jobs';

export default async function Index() {
  const data = await getJobs(`${process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS}`);

  return (
    <div className='w-full flex flex-col items-center justify-center text-gray-900 antialiased'>
      <Navbar />
      <div className='w-full h-full mb-[7rem] flex  items-center justify-center antialiased'>
        <List data={data} />
      </div>
    </div>
  );
}
