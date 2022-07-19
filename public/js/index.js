// api url
const url = 'http://localhost:5000/jobs/data';

async function fetchData() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

fetchData().then((res) => {
  console.log(res);
});
