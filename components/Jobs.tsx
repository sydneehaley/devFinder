import List from './List';
// import { createServerClient } from '../utils/supabase-server';

async function getData() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/jobs?populate=*`);
  const res = await fetch(`http://localhost:1337/api/jobs?populate=*`);

  if (!res.ok) {
    throw new Error();
  }

  return res.json();
}

export default async function Jobs() {
  // const [jobs, setJobs] = useState();
  // const supabase = createServerClient();
  //const { data, error } = await supabase?.from('test').select('*');
  const data = await getData();

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/jobs?populate=*`)
  //     .then((response) => response.json())
  //     .then((data) => setJobs(data.data));
  // }, []);

  return <List data={data} />;
}
