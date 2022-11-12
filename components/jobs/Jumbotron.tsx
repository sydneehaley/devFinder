import type { NextPage } from 'next';

const Jumbotron: NextPage = () => {
  return (
    <div className='w-full h-[40vh] flex items-center justify-center border-b border-neutral-700/40'>
      <div className='w-[80%] flex flex-col items-center justify-center'>
        <h1 className='font-bold text-[2rem] mb-[2rem] text-white'>Search Jobs</h1>
        <form className='w-[60%]'>
          <input className='w-full border border-neutral-700/60 bg-white/10 rounded-full h-[7vh]' placeholder='Job title or position'></input>
        </form>
      </div>
    </div>
  );
};

export default Jumbotron;
