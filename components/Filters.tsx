export default function Filters() {
  return (
    <div className='w-[22%] flex flex-col items-start justify-start '>
      <h6 className='text-[14px] font-semibold text-white'>Browse</h6>
      <ul className='mt-[2rem] text-[14px] font-regular leading-[36px]  border-l border-neutral-content/30 child:pl-[1.5rem] child:text-white/40'>
        <li className='border-l border-white font-medium text-white'>All</li>
        <li className=''>Frontend Engineer</li>
        <li className=''>Backend Engineer</li>
        <li className=''>Fullstack Engineer</li>
        <li className=''>Database</li>
        <li className=''>QA Engineer</li>
        <li className=''>Devops</li>
        <li className=''>Advocate</li>
      </ul>
    </div>
  );
}
