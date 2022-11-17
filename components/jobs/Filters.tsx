import type { NextPage } from 'next';

type Props = {
  data?: any[];
};

const Filters: NextPage<Props> = ({ data }) => {
  // there should be no `undefined` state
  console.log('Is data ready?', !!data);
  console.log(data);
  console.log(typeof data === 'object');

  return <div className='w-[22%] flex flex-col items-start justify-start'>Filters here</div>;
};

export default Filters;
