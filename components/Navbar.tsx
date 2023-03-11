'use client';

import { useEffect, useState } from 'react';
import { ChevronDownIcon, Bars3Icon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { location } from '../components/Location';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import DropdownMenu from './DropdownMenu';
import Signin from './Signin';

export default function Navbar(session: any) {
  const [cityData, setCityData] = useState<any>(null);
  const [city, setCity] = useState<any>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        location(position.coords.latitude, position.coords.longitude).then((res) => {
          setCityData(res.features[0].properties);
          setCity(res.features[0].properties.city);
        });
      });
    }
  }, []);

  return (
    <div className='w-full h-[10vh] border-b bg-transparent dark:border-neutral-400/10 flex justify-center items-center antialiased'>
      <div className='w-[80%] flex justify-center items-center'>
        <div className='w-full flex'>
          <div className=' font-bold w-[25%]'>
            <div className='w-full flex items-center justify-start h-[9vh]'>
              <div className='flex items-center'>
                {/* <svg id='logo-73' width='45' height='40' viewBox='0 0 60 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M56.25 1.25C56.25 1.94036 56.8096 2.5 57.5 2.5H58.75C59.4404 2.5 60 1.94036 60 1.25C60 0.559648 59.4404 3.49691e-06 58.75 3.49691e-06H57.5C56.8096 3.49691e-06 56.25 0.559648 56.25 1.25Z'
                    className='ccustom'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M20 40H26.0723L24.3045 38.2322C23.8357 37.7634 23.1998 37.5 22.5368 37.5H20C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.50001 20 2.5L40 2.5C49.665 2.5 57.5 10.335 57.5 20C57.5 29.665 49.665 37.5 40 37.5H32.5184C31.5238 37.5 30.57 37.1049 29.8667 36.4017L27.7957 34.3306C26.6236 33.1585 25.0338 32.5 23.3762 32.5H20C13.0964 32.5 7.5 26.9036 7.5 20C7.5 13.0964 13.0964 7.5 20 7.5L40 7.5C46.9036 7.5 52.5 13.0964 52.5 20C52.5 26.9036 46.9036 32.5 40 32.5H35.1961C34.2015 32.5 33.2477 32.1049 32.5444 31.4017L30.4733 29.3306C29.3012 28.1585 27.7115 27.5 26.0539 27.5H20C15.8579 27.5 12.5 24.1421 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5L40 12.5C44.1421 12.5 47.5 15.8579 47.5 20C47.5 24.0916 44.2235 27.418 40.1512 27.4985L40.1504 27.5H38.3211C37.3265 27.5 36.3727 27.1049 35.6694 26.4017L33.5983 24.3306C32.6366 23.3688 31.3937 22.7529 30.0628 22.5628L30 22.5L20 22.5C18.6193 22.5 17.5 21.3807 17.5 20C17.5 18.6193 18.6193 17.5 20 17.5L40 17.5C41.3807 17.5 42.5 18.6193 42.5 20C42.5 21.3807 41.3807 22.5 40 22.5H35L36.7678 24.2678C37.2366 24.7366 37.8725 25 38.5355 25H40C42.7614 25 45 22.7614 45 20C45 17.2386 42.7614 15 40 15L20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25L29.1789 25C30.1735 25 31.1273 25.3951 31.8306 26.0983L33.9017 28.1694C35.0738 29.3415 36.6635 30 38.3211 30H40.625V29.9808C45.8567 29.6582 50 25.3129 50 20C50 14.4772 45.5228 10 40 10L20 10C14.4772 10 10 14.4772 10 20C10 25.5229 14.4772 30 20 30H26.0539C27.0485 30 28.0023 30.3951 28.7056 31.0983L30.7767 33.1694C31.9488 34.3415 33.5385 35 35.1961 35H40C48.2843 35 55 28.2843 55 20C55 11.7157 48.2843 5 40 5L20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35H23.3762C24.3708 35 25.3246 35.3951 26.0279 36.0983L28.099 38.1694C29.2711 39.3415 30.8608 40 32.5184 40H40C51.0457 40 60 31.0457 60 20C60 8.9543 51.0457 -9.65645e-07 40 0L20 4.13264e-06C8.9543 5.09829e-06 -9.65645e-07 8.95431 0 20C9.65645e-07 31.0457 8.95431 40 20 40Z'
                    className='ccustom'
                    fill='currentColor'
                  ></path>
                </svg> */}
                <p className='text-[25px] text-neutral-800 ml-4  font-logo  font-bold dark:text-neutral-400 tracking-[-1px]'>devfinder</p>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <form className='w-[43%] border border-neutral-300  shadow-lg dark:border-neutral-400/10 rounded-full h-[5vh] flex items-center justify-between p-[1rem]'>
              <div className='w-[30%] flex bg-transparent  w-full border-r dark:border-base-100/10 font-regular'>
                <div className='w-full flex'>
                  {/* <button className='rounded-full h-[4vh] h-[7vh] flex items-center justify-center'>
                    <MagnifyingGlassIcon className='h-7 w-7  mr-[0.5rem] dark:text-base-100/50' />
                  </button> */}
                  <input
                    placeholder='Job title'
                    className='placeholder:text-[14px] placeholder:flex placeholder:text-neutral-600 dark:placeholder:text-base-100/50 placeholder:font-medium placeholder:w-full placeholder:text-center w-full bg-transparent outline-0 text-[16px]'
                  />
                </div>
              </div>
              <div className='w-[30%] flex bg-transparent w-full font-regular border-r dark:border-base-100/10'>
                <div className='w-full flex '>
                  <input
                    placeholder='Location'
                    className='placeholder:text-[14px] placeholder:text-neutral-600 dark:placeholder:text-base-100/50 placeholder:font-medium placeholder:text-center w-full  bg-transparent outline-0  text-[16px]'
                  />
                </div>
              </div>

              <div className='w-[30%] flex bg-transparent w-full font-regular'>
                <div className='w-full flex'>
                  <input
                    placeholder='Salary'
                    className='placeholder:text-[14px] placeholder:text-neutral-600 dark:placeholder:text-base-100/50 placeholder:font-medium placeholder:text-center  w-full  bg-transparent outline-0  text-[16px]'
                  />
                </div>
              </div>
              <button className='rounded-full dark:bg-neutral-600 w-[8%] text-[16px] dark:text-base-content font-semibold flex items-center justify-center h-[3vh]'>
                <MagnifyingGlassIcon className='w-5 h-5 text-neutral-400 stroke-[2.5px]' />
              </button>
            </form>
          </div>

          <div className='w-[25%] h-[9vh] flex items-center justify-end'>
            {/* <ul className='flex w-[70%] ml-[3rem] justify-between text-[15px] font-medium'>
              <li className='flex items-center justify-center bg-error-content p-[1rem] rounded-full text-neutral-900 w-[10rem]'>Post a job</li>
            </ul> */}
            <div className='flex w-[67%] items-center justify-end'>
              {' '}
              <Bars3Icon className='w-9 h-9' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
