import { useState, useEffect } from 'react';
import Link from 'next/link';
import navStyles from '../src/utils/styles/Nav.module.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  let navbarClasses = ['navbar__home'];
  if (scrolled === true) {
    navbarClasses.push('navbar__home--scrolled');
  }

  console.log(scrolled);

  return (
    <nav id={navbarClasses.join(' ')}>
      <div className='nav--home__container'>
        <div className='nav--home__left'>
          <svg xmlns='http://www.w3.org/2000/svg' width='96' height='24' viewBox='0 0 96 24'>
            <text
              id='devFinder'
              transform='translate(0 19)'
              fill='#262626'
              font-size='19'
              font-family='TestUntitledSans-Bold, Test Untitled Sans'
              font-weight='700'
              letter-spacing='-0.013em'
            >
              <tspan x='0' y='0'>
                devFinder
              </tspan>
            </text>
          </svg>
        </div>
        <div className='nav--home__center'>
          <ul>
            <li>
              Jobs
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-chevron-down' viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </li>
            <li>Employers</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className='nav--home__right'>
          <button id='home__button--signin'>Log In</button>
          <button id='home__button--signup'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
