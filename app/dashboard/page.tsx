import 'server-only';
import { getJobs } from '../data/jobs';
import List from '../../components/List';

export const revalidate = 0;

export default async function Dashboard() {
  const data = await getJobs('https://devfinder-client-api.herokuapp.com/api/jobs?populate=*');

  return (
    <div className='w-[80%] flex flex-col items-center justify-center my-[3rem] antialiased'>
      <List data={data} />
    </div>
  );
}
