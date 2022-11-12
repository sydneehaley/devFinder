import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const router = useRouter();
  return (
    <div className='w-full h-[8vh] border-b border-neutral-700/40 flex justify-center items-center'>
      <div className='w-[82%] flex h-full justify-center items-center'>
        <div className='text-white font-sans font-bold w-[33.3%]'>
          <div className='w-full flex items-center'>
            <svg id='logo-73' width='45' height='40' viewBox='0 0 60 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              {' '}
              <path
                d='M56.25 1.25C56.25 1.94036 56.8096 2.5 57.5 2.5H58.75C59.4404 2.5 60 1.94036 60 1.25C60 0.559648 59.4404 3.49691e-06 58.75 3.49691e-06H57.5C56.8096 3.49691e-06 56.25 0.559648 56.25 1.25Z'
                className='ccustom'
                fill='#212326'
              ></path>{' '}
              <path
                d='M20 40H26.0723L24.3045 38.2322C23.8357 37.7634 23.1998 37.5 22.5368 37.5H20C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.50001 20 2.5L40 2.5C49.665 2.5 57.5 10.335 57.5 20C57.5 29.665 49.665 37.5 40 37.5H32.5184C31.5238 37.5 30.57 37.1049 29.8667 36.4017L27.7957 34.3306C26.6236 33.1585 25.0338 32.5 23.3762 32.5H20C13.0964 32.5 7.5 26.9036 7.5 20C7.5 13.0964 13.0964 7.5 20 7.5L40 7.5C46.9036 7.5 52.5 13.0964 52.5 20C52.5 26.9036 46.9036 32.5 40 32.5H35.1961C34.2015 32.5 33.2477 32.1049 32.5444 31.4017L30.4733 29.3306C29.3012 28.1585 27.7115 27.5 26.0539 27.5H20C15.8579 27.5 12.5 24.1421 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5L40 12.5C44.1421 12.5 47.5 15.8579 47.5 20C47.5 24.0916 44.2235 27.418 40.1512 27.4985L40.1504 27.5H38.3211C37.3265 27.5 36.3727 27.1049 35.6694 26.4017L33.5983 24.3306C32.6366 23.3688 31.3937 22.7529 30.0628 22.5628L30 22.5L20 22.5C18.6193 22.5 17.5 21.3807 17.5 20C17.5 18.6193 18.6193 17.5 20 17.5L40 17.5C41.3807 17.5 42.5 18.6193 42.5 20C42.5 21.3807 41.3807 22.5 40 22.5H35L36.7678 24.2678C37.2366 24.7366 37.8725 25 38.5355 25H40C42.7614 25 45 22.7614 45 20C45 17.2386 42.7614 15 40 15L20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25L29.1789 25C30.1735 25 31.1273 25.3951 31.8306 26.0983L33.9017 28.1694C35.0738 29.3415 36.6635 30 38.3211 30H40.625V29.9808C45.8567 29.6582 50 25.3129 50 20C50 14.4772 45.5228 10 40 10L20 10C14.4772 10 10 14.4772 10 20C10 25.5229 14.4772 30 20 30H26.0539C27.0485 30 28.0023 30.3951 28.7056 31.0983L30.7767 33.1694C31.9488 34.3415 33.5385 35 35.1961 35H40C48.2843 35 55 28.2843 55 20C55 11.7157 48.2843 5 40 5L20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35H23.3762C24.3708 35 25.3246 35.3951 26.0279 36.0983L28.099 38.1694C29.2711 39.3415 30.8608 40 32.5184 40H40C51.0457 40 60 31.0457 60 20C60 8.9543 51.0457 -9.65645e-07 40 0L20 4.13264e-06C8.9543 5.09829e-06 -9.65645e-07 8.95431 0 20C9.65645e-07 31.0457 8.95431 40 20 40Z'
                className='ccustom'
                fill='#22c55e'
              ></path>{' '}
            </svg>
            <p className='text-[16px] ml-4'>devFinder</p>
          </div>
        </div>
        <div className='w-[33.3%] h-full flex  justify-center '>
          <ul className='w-[65%] h-full flex  justify-between font-medium text-[1.14rem]'>
            <li className={router.pathname == '/jobs' ? 'border-b border-white flex items-center' : 'flex items-center'}>Jobs</li>
            <li className={router.pathname == '/jobs/employers' ? 'border-b border-white flex items-center' : ' flex items-center'}>Employers</li>
            <li className={router.pathname == '/jobs/resources' ? 'border-b border-white flex items-center' : 'flex items-center'}>Resources</li>
          </ul>
        </div>
        <div className='w-[33.3%] h-full flex items-center'>
          <div className='w-full flex items-center justify-center'>
            <div className='w-[90%] flex h-full items-center justify-end pr-[1rem]'>
              <div className='w-[15%] flex items-center justify-center'>
                <svg width='18px' height='18px' viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                  <g stroke='currentColor' stroke-width='2' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'>
                    <g transform='translate(2.000000, 2.000000)' stroke='currentColor' stroke-width='4'>
                      <path
                        d='M40,80 C62.09139,80 80,62.09139 80,40 C80,17.90861 62.09139,0 40,0 C17.90861,0 0,17.90861 0,40 C0,62.09139 17.90861,80 40,80 Z'
                        id='Layer-1'
                      ></path>
                      <path d='M96,96 L68.4954549,68.4954549' id='Layer-2'></path>
                    </g>
                  </g>
                </svg>
              </div>

              <div className='w-[15%] flex items-center justify-center'>
                <svg width='18px' height='18px' viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                  <g transform='translate(2.000000, 3.000000)' stroke='currentColor' fill='none' stroke-width='4'>
                    <path
                      d='M1,82.6624363 C10.0657813,75.4737565 15.7929233,64.902803 15.7929233,53.117652 L15.7929233,38.411768 C15.7929233,22.1680971 30.2998277,9 48.1950012,9 C66.0901747,9 80.5970791,22.1680971 80.5970791,38.411768 L80.5970791,53.117652 C80.5970791,64.9028045 86.3242225,75.4737592 95.3899994,82.6624363'
                      id='Layer-1'
                    ></path>
                    <ellipse id='Layer-2' cx='48' cy='84.6' rx='48' ry='9.6'></ellipse>
                    <path
                      d='M59.6423952,76 C58.7027212,81.6902897 53.7598241,86.0302232 47.8032814,86.0302232 C41.9187538,86.0302232 37.0235101,81.7945959 36,76.2057913'
                      id='Layer-3'
                    ></path>
                    <path d='M38,10 C38,4.4771525 42.4771525,0 48,0 C53.5228475,0 58,4.4771525 58,10' id='Layer-4'></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className='flex items-center justify-center w-[10%]'>
              <div className='overflow-hidden relative w-10 h-10 bg-neutral-500 rounded-full dark:bg-gray-600'>
                <svg
                  className='absolute -left-1 w-12 h-12 text-neutral-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd'></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
