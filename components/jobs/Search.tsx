import type { NextPage } from 'next';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// bg-gradient-to-b from-green-500/40 to-blue-500/40 flex items-center justify-center

const Search: NextPage = () => {
  return (
    <div className='w-full h-[40vh] bg-transparent flex items-center justify-center'>
      <div className='w-[82%] flex flex-col items-center justify-center'>
        <h1 className='font-bold text-[2rem] mb-[2rem] text-white leading-[6rem]'>Find a job</h1>
        <form className='w-full h-[7vh] flex bg-black/10  rounded-xl  justify-between focus:bg-black'>
          <div className='w-[90%] h-full flex justify-between p-[1rem]'>
            <div className='flex w-[33%] h-full border-r border-neutral-700/40    justify-center items-center'>
              <BriefcaseIcon className='h-6 w-6 text-green-500' />
              <input
                className='w-[90%]  bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                placeholder='Job title or position'
              ></input>
            </div>
            <div className='flex w-[33%]  h-full border-r border-neutral-700/40 justify-center items-center'>
              <MapPinIcon className='h-6 w-6 text-green-500' />
              <input
                className='w-full w-[90%] bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                placeholder='Location'
              ></input>
            </div>
            <div className='flex w-[33%]  h-full  rounded-md  justify-center items-center'>
              <input
                className='w-full w-[95%] bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                placeholder='Full-time'
              ></input>
              <ChevronDownIcon className='h-6 w-6 text-white/20' />
            </div>
          </div>
          <button className='bg-green-500  w-[10%] rounded-tr-xl rounded-br-xl text-white text-[14px] font-semibold w-[15%] flex items-center justify-center'>
            Search Jobs
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
