import Navbar from '../components/Navbar';
import List from '../components/List';
import { getJobs } from './data/jobs';

export default async function Index() {
  const data = await getJobs(`${process.env.NEXT_PUBLIC_STRAPI_API_URL_JOBS}`);

  return (
    <div className='w-full flex flex-col items-center justify-center font-theme'>
      <Navbar />
      <div className='w-[80%] h-full mb-[7rem] flex  items-center justify-center  antialiased'>
        <List data={data} />
      </div>
    </div>
  );
}
