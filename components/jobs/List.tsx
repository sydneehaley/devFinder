import type { NextPage } from 'next';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

type Props = {
  data?: any[];
};

const List: NextPage<Props> = ({ data }) => {
  // there should be no `undefined` state
  console.log('Is data ready?', !!data);
  console.log(data);
  console.log(typeof data === 'object');

  return (
    <div className='w-full flex flex-col items-start justify-start'>
      <div className='mb-[3rem]'>
        <h1 className='text-white text-[1.5rem]'>Recent Jobs</h1>
      </div>

      <ul className='w-full p-0 m-0 grid grid-cols-3 grid-rows-3 gap-x-[3vh] gap-y-[3vh]'>
        {data?.map((job: any, i: any) => (
          <li className='bg-black/10 h-[38vh] rounded-xl p-[2rem]' key={job?.job_id}>
            <div className='leading-[2rem] h-[80%]'>
              <div className='bg-black/20 w-[7vh] h-[7vh] mb-[2rem] rounded-full flex items-center justify-center'>
                <CodeBracketIcon className='h-6 w-6 text-green-500' />
              </div>
              <h6 className='text-[16px] font-semibold text-white'>{job.title}</h6>
              <h6 className='text-[13px]'>{job.company}</h6>
              {/* <h6 className='text-[13px]'>{job.location}</h6> */}
            </div>
            <div className='h-[20%]'>
              <button className='w-full h-full bg-black/20 font-semibold text-[14px] rounded-xl'>Apply Now</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
