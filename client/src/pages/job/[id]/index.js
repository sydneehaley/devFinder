import { server } from '../../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Job = ({ job }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{job[0].job_link}</h1>
      <p>job link</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/jobs/${context.params.id}`);
  const job = await res.json();

  return {
    props: {
      job,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/jobs`);
  const jobs = await res.json();

  const ids = jobs.map((job) => job.job_id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Job;
