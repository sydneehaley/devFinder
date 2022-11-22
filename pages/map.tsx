import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MapView from '../components/jobs/MapView';

const Map: NextPage = () => {
  return (
    <div className='w-full'>
      <MapView />
    </div>
  );
};

export default Map;
