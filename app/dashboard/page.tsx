import List from './List';

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs', { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Jobs() {
  const data = await getJobs();

  return <List data={data} />;
}

export default function Dashboard() {
  return (
    <div className='w-[82%] flex flex-col items-center justify-center my-[5rem] antialiased'>
      {/* @ts-expect-error Server Component */}
      <Jobs />
    </div>
  );
}
