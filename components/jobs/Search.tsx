import type { NextPage } from 'next';
import Geocode from 'react-geocode';
import { useEffect, useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// bg-gradient-to-b from-green-500/40 to-blue-500/40 flex items-center justify-center

const key = process.env.GOOGLEMAPS_APIKEY;
console.log(key);

const Search: NextPage = () => {
  const [lat, setLat] = useState<any>(null);
  const [lng, setLng] = useState<any>(null);
  const [status, setStatus] = useState<any>(null);
  const [city, setCity] = useState<any>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
          (response: any) => {
            let city, state, country;
            for (let i = 0; i < response.results[0].address_components.length; i++) {
              for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                switch (response.results[0].address_components[i].types[j]) {
                  case 'locality':
                    city = response.results[0].address_components[i].long_name;
                    break;
                  case 'administrative_area_level_1':
                    state = response.results[0].address_components[i].long_name;
                    break;
                  case 'country':
                    country = response.results[0].address_components[i].long_name;
                    break;
                }
              }
            }
            setCity(city);
            console.log(city, state, country);
          },
          (error: any) => {
            console.error(error);
          }
        );
      });

      Geocode.setApiKey(key);
    } else {
      console.log('Not Available');
    }
  });

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
                  placeholder={city}
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
