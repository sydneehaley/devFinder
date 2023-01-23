'use client';

export default function List({ data }: { data: any }) {
  return (
    <div className='w-full flex flex-col items-start justify-start'>
      <div className='w-full mb-[3rem] flex items-center justify-start'>
        <h6 className='text-[14px] font-semibold text-white'>Jobs near you</h6>
      </div>

      <ul className='w-full p-0 m-0 grid grid-cols-3 grid-rows-3 gap-x-[3vh] gap-y-[3vh] child:shadow-sm '>
        {data?.map((job: any, i: any) => (
          <li className=' border border-neutral-700/70 h-full rounded-xl p-[2rem]' key={job?.job_id}>
            <div className='leading-[2rem] h-[80%]'>
              <h6 className='text-[14px] font-semibold text-amber-200'>{job.title}</h6>
              <h6 className='text-[12px] text-white/30'>{job.company}</h6>
              {/* <h6 className='text-[13px]'>{job.location}</h6> */}
              <p className='mt-[1rem] leading-[1.6rem]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime voluptatibus sequi fuga dolorum. Netus et malesuada fames
                ac turpis.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
