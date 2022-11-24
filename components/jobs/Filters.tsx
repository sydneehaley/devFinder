import type { NextPage } from 'next';

type Props = {
  data?: any[];
};

const Filters: NextPage<Props> = ({ data }) => {
  return <div className='w-[22%] flex flex-col items-start justify-start'>Filters here</div>;
};

export default Filters;
