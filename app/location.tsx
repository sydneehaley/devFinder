export const location = async (lat: any, long: any) => {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_APIKEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};
