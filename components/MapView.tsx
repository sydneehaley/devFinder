'use client';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import type { NextPage } from 'next';

const key: any = process.env.GOOGLEMAPS_APIKEY;

const containerStyle = {
  height: '100vh',
};

export default function MapView() {
  const [lat, setLat] = useState<any>();
  const [lng, setLng] = useState<any>();
  const [stringLatLng, setStringLatLng] = useState<string>();

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        setLat(position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);
        setLng(position.coords.longitude);
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap mapContainerStyle={containerStyle} mapContainerClassName='w-full h-full' center={{ lat, lng }} zoom={15} />
    </LoadScript>
  );
}
