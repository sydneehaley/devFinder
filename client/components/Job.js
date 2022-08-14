import Link from 'next/link';

const Job = ({ job }) => {
  return (
    <div>
      <Link href='/job/[id]' as={`/job/${job.job_id}`}>
        <a className=''>
          <h3>{job.job_shift} &rarr;</h3>
        </a>
      </Link>
    </div>
  );
};

export default Job;
