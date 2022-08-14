import Job from './Job';

export const JobsList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <Job job={job} />
      ))}
    </div>
  );
};

export default JobsList;
