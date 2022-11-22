import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

// bg-gradient-to-b from-green-500/40 to-blue-500/40 flex items-center justify-center

const Search: NextPage = () => {
  const [cityData, setCityData] = useState<any>(null);
  const [city, setCity] = useState<any>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        const config = {
          method: 'get',
          url: `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=${process.env.GEOAPIFY_APIKEY}`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(response.data);
            setCityData(response.data);
            setCity(response.data.features[0].properties.city);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
  }, []);

  return (
    <div className='w-full h-[40vh] bg-transparent border-b border-neutral-700/40 flex items-center justify-center'>
      <div className='w-[82%] flex flex-col items-center justify-center'>
        <h1 className=' text-[2rem] mb-[2rem] text-white leading-[6rem]'>Find a job</h1>
        <form className='w-full h-[7vh] flex bg-black/10  rounded-xl  justify-between focus:bg-black'>
          <div className='w-[90%] h-full flex justify-between p-[1rem]'>
            <div className='flex w-[25%] h-full border-r border-neutral-700/40    justify-center items-center'>
              <div className='flex w-[95%]'>
                <MagnifyingGlassIcon className='h-6 w-6 text-green-500' />
                <input
                  className='w-[90%]  bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                  placeholder='Job title or position'
                ></input>
              </div>
            </div>
            <div className='flex w-[25%]  h-full border-r border-neutral-700/40 justify-center items-center'>
              <div className='flex w-[90%]'>
                <MapPinIcon className='h-6 w-6 text-green-500' />
                <input
                  className='w-full w-[90%] bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                  placeholder={city === null ? 'Finding you...' : city}
                ></input>
              </div>
            </div>
            <div className='flex w-[25%] border-r border-neutral-700/40  h-full  rounded-md  justify-center items-center'>
              <div className='flex w-[90%]'>
                <ClockIcon className='h-6 w-6 text-green-500' />
                <input
                  className='w-full w-[95%] bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                  placeholder='Full-time'
                ></input>
                <ChevronDownIcon className='h-6 w-6 text-white/20' />
              </div>
            </div>
            <div className='flex w-[25%]  h-full  justify-center items-center'>
              <div className='flex w-[90%]'>
                <CurrencyDollarIcon className='h-6 w-6 text-green-500' />
                <input
                  className='w-full w-[90%] bg-transparent placeholder:text-white/20 placeholder:text-[14px] placeholder:font-semibold pl-[1rem] outline-0'
                  placeholder='Salary'
                ></input>
              </div>
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
