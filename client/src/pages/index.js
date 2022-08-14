import { server } from '../../config';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../../components/Nav';
import styles from '../utils/styles/Layout.module.css';
import JobsList from '../../components/JobsList';
import home_girloncouch from '../utils/assets/images/home_girloncouch.png';
import home_girlholdinglaptop from '../utils/assets/images/home_girlholdinglaptop.png';
import home_people from '../utils/assets/images/home_people.png';

export default function Home({ jobs }) {
  return (
    <div>
      <Head>
        <title>devFinder </title>
        <meta name='keywords' content='software engineering, web development jobs'></meta>
      </Head>

      <div className='home'>
        <Nav />
        <div className='home__main'>
          <div className='home__main__container'>
            <div className='home__main__container__left'>
              <h1>Find an awesome job</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eveniet numquam eum.</p>
              <button>Explore Jobs</button>
            </div>
            <div className='home__main__container__right'>
              <Image src={home_girloncouch} />
            </div>
          </div>
        </div>

        <section id='section-seo'>
          <div className='section__what'>
            <div className='section__what__left'>
              <div className='section__what__left__header'>
                <h2>Discover relevant roles</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere assumenda aspernatur reiciendis cumque possimus quibusdam unde
                  aliquam, natus necessitatibus ad perferendis.
                </p>
              </div>
            </div>
            <div className='section__what__right'>
              <Image src={home_girlholdinglaptop} />
            </div>
          </div>
        </section>

        <section id='section-seo-mission'>
          <div className='section__what'>
            <div className='section__what__right'>
              <Image src={home_people} />
            </div>

            <div className='section__what__left'>
              <div className='section__what__left__header'>
                <h2>We are advocates</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere assumenda aspernatur reiciendis cumque possimus quibusdam unde
                  aliquam, natus necessitatibus ad perferendis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id='section__about__cards'>
          <div className='section__about__cards__container'>
            <div className='section__about__cards__container__row'>
              <div className='section__about__cards__container__card'>
                <div className='section__about__cards__container__card__container'>
                  <div className='section__about__cards__container__card--blurb'>
                    <h2>Daily jobs</h2>
                  </div>
                </div>
              </div>
              <div className='section__about__cards__container__card'>
                <div className='section__about__cards__container__card__container'>
                  <div className='section__about__cards__container__card--blurb'>
                    <h2>Curated by devs</h2>
                  </div>
                </div>
              </div>

              <div className='section__about__cards__container__card'>
                <div className='section__about__cards__container__card__container'>
                  <div className='section__about__cards__container__card--blurb'>
                    <h2>Trusted Listings</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id='section-jobs'>
          <div className='section__jobs'>
            <div className='section__jobs__top'>
              <h2>
                ✺ <br />
                Community
              </h2>
            </div>

            <div className='section__jobs__bottom'>
              <ul>
                <li>
                  <div className='section__jobs__bottom__job--title'>
                    <div className='section__jobs__bottom__job--title--title'>
                      <span>Software Engineer</span>
                      <span className='section__jobs__bottom__job--title--title--company'>Google</span>
                    </div>
                  </div>
                  <div className='section__jobs__bottom__job--leftcolumn'>
                    <span>Remote</span>
                  </div>
                  <div className='section__jobs__bottom__job--leftcolumn'>
                    <span>$115k</span>
                  </div>
                  <div className='section__jobs__bottom__job--rightcolumn'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-arrow-right'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                      />
                    </svg>
                  </div>
                </li>

                <li>
                  <div className='section__jobs__bottom__job--title'>
                    <div className='section__jobs__bottom__job--title--title'>
                      <span>React Developer</span>
                      <span className='section__jobs__bottom__job--title--title--company'>Github</span>
                    </div>
                  </div>
                  <div className='section__jobs__bottom__job--leftcolumn'>
                    <span>San Francisco</span>
                  </div>
                  <div className='section__jobs__bottom__job--leftcolumn'>
                    <span>$115k</span>
                  </div>
                  <div className='section__jobs__bottom__job--rightcolumn'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-arrow-right'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                      />
                    </svg>
                  </div>
                </li>

                <li>
                  <div className='section__jobs__bottom__job--title'>
                    <div className='section__jobs__bottom__job--title--title'>
                      <span>React Developer</span>
                      <span className='section__jobs__bottom__job--title--title--company'>Github</span>
                    </div>
                  </div>
                  <div className='section__jobs__bottom__job--leftcolumn'>
                    <span>San Francisco</span>
                  </div>
                  <div className='section__jobs__bottom__job--leftcolumn'>
                    <span>$115k</span>
                  </div>
                  <div className='section__jobs__bottom__job--rightcolumn'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-arrow-right'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section></section>
      </div>
      <script></script>
    </div>
  );
}

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`${server}/api/jobs`);
//   const jobs = await res.json();

//   // Pass data to the page via props
//   return { props: { jobs } };
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/jobs`);
//   const jobs = await res.json();
//   return {
//     props: {
//       jobs,
//     },
//   };
// };
