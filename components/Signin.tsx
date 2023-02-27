import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Transition, Dialog } from '@headlessui/react';
import { useLogin } from '../hooks/auth/useLogin';

type SignInProps = {
  isOpen: boolean;
  openModal?: () => void;
  closeModal: () => void;
};

export default function Signin({ isOpen, closeModal }: SignInProps) {
  const [user, setUser] = useState({ identifier: '', password: '' });
  const { identifier, password } = user;
  let [rememberUser, setRememberUser] = useState(false);

  const { login } = useLogin();

  const handleOnChange = (e: any) => {
    e.preventDefault;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    login(identifier, password)
      .then((res) => console.log(res))
      .catch((e) => alert(e));
  };

  console.log(identifier, password);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-80' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-[50vw] h-full transform overflow-hidden rounded-2xl bg-neutral-focus  p-[3rem] text-left align-middle flex items-center justify-center shadow-xl transition-all'>
                  <div className='w-[70%] box-content flex flex-col items-center justify-center antialiased text-white mb-[5rem]'>
                    {/* <div className='w-full flex flex-col items-center justify-center mb-[2rem]'>
                        <h1 className='text-[2rem] leading-[4rem]'>
                          <Logo />
                        </h1>
                      </div> */}
                    <div className='w-full flex items-center justify-center'>
                      <h1 className='text-[2rem] leading-[10rem]'>Jobs for you</h1>
                    </div>
                    <form onChange={handleOnChange} className='w-full flex flex-col'>
                      <input
                        name='identifier'
                        value={user.identifier}
                        placeholder='Email address'
                        className='border-b border-neutral-content/30 bg-transparent h-[6vh]  mb-[2rem] text-white placeholder:text-white/40 placeholder:font-regular placeholder:text-[14px] font-medium text-[16px] py-[1rem] focus:outline-0'
                      />
                      <input
                        name='password'
                        value={user.password}
                        placeholder='Password'
                        className='border-b border-neutral-content/30 bg-transparent h-[6vh] mb-[2rem] text-white placeholder:text-white/40 placeholder:font-regular font-medium text-[14px] py-[1rem] focus:outline-0'
                      />

                      <div className='w-full flex items-center justify-center my-[1rem]'>
                        <div className='w-[50%]'>
                          <div className='w-full flex'>
                            <input
                              type='checkbox'
                              onClick={() => setRememberUser(!rememberUser)}
                              checked={rememberUser}
                              className='checkbox checkbox-secondary rounded-sm'
                            />
                            <p className='ml-[0.5rem] text-[14px]'> Remember me</p>
                          </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-end'>
                          <p className='text-[14px] font-regular underline'>Forgot Password?</p>
                        </div>
                      </div>
                      <div className='w-full flex flex-col items-center justify-between mt-[2rem]'>
                        <button
                          onClick={handleSubmit}
                          className='w-full bg-green-500 h-[5vh] rounded-lg text-white text-[14px] font-medium mb-[1.2rem]'
                        >
                          Sign in
                        </button>

                        <button className='w-full border border-neutral-content/30 h-[5vh] rounded-lg text-white text-[14px] font-medium'>
                          Create an account
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
