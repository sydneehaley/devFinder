import type { NextPage } from 'next';

type Props = {
  data?: any[];
};

const List: NextPage<Props> = ({ data }) => {
  // there should be no `undefined` state
  console.log('Is data ready?', !!data);
  console.log(data);
  console.log(typeof data === 'object');

  return (
    <div className='w-[82%] flex flex-col items-start justify-start'>
      <div>
        <h1>Jobs</h1>
      </div>
      <div>
        {data?.map((job: any, i: any) => (
          <ul className='p-0 m-0'>
            <li>
              <div>
                <h6>{job.title}</h6>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default List;
