'use client';
import { MagnifyingGlassIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Searchbar() {
  return (
    <div className='w-full h-[20vh] border-b flex flex-col items-center justify-center'>
      <div className='w-[90%]'>
        {/* <h6 className='text-3xl font-semibold mb-[3rem] tracking-[-1px] text-left'>Find an awesome job...</h6> */}
        <form className='w-[60%] flex flex-col justify-between'>
          <div className='flex w-full'>
            <div className='w-[80%] border border-gray-300 rounded-full h-[6vh] flex items-center justify-between'>
              <div className='w-[50%] flex bg-transparent  w-full border-r  font-regular'>
                <div className='flex ml-[1rem]'>
                  <button className='rounded-full h-[4vh] h-[7vh] flex items-center justify-center'>
                    <MagnifyingGlassIcon className='h-7 w-7 text-base-content mr-[0.5rem]' />
                  </button>
                  <input
                    placeholder='Search by job title'
                    className='placeholder:text-[14px] placeholder:text-base-content placeholder:font-medium placeholder:ml-[2rem] w-full  bg-transparent outline-0 pl-[0.2rem] text-[16px] text-base-content'
                  />
                </div>
              </div>
              <div className='w-[50%] flex bg-transparent w-full font-regular'>
                <div className='flex items-center'>
                  <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
                    <MapPinIcon className='h-7 w-7 ml-[1rem] mr-[0.5rem] text-base-content' />
                  </button>
                  <input
                    placeholder='Location'
                    className='placeholder:text-[14px] placeholder:text-base-content placeholder:font-medium placeholder:ml-[1rem] w-full  bg-transparent outline-0 pl-[0.2rem] text-[16px] text-base-content'
                  />
                </div>
              </div>
            </div>
            <button className='rounded-full bg-accent w-[19%] text-[16px] font-bold ml-[1rem]'>Search Jobs</button>
          </div>
          <div className='mt-[1rem] flex'>
            <button className='border border-gray-300 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center mr-[8px]'>
              Full-time <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] text-neutral flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center mr-[8px]'>
              Remote <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] text-neutral flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center mr-[8px]'>
              Date posted <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] text-neutral flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center mr-[8px]'>
              Salary range <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] text-neutral flex items-center justify-center' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
