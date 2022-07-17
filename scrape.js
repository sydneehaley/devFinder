const axios = require('axios');
const cheerio = require('cheerio');
const _ = require('lodash');
const { Worker, isMainThread, parentPort } = require('worker_threads');
const workDir = __dirname + '/dbWorker.js';

//indeed junior full time query
const days_posted = 3;
const query = 'react';
const location = 'Los+Angeles%2C+CA';
const skill_level = '0kf:attr(84K74)explvl(ENTRY_LEVEL)';
const type_code = '0kf%3Ajt%28fulltime%29%3B';
const type_string = 'Full-time';
const radius = '5';

const url = `https://www.indeed.com/jobs?q=${query}&l=${location}&sc=${skill_level}%29%3B&fromage=${days_posted}&sc=${type_code}&radius=${radius}&vjk=7e81a8a57f4ce1e8`;
console.log(url);

async function fetchData(url) {
  console.log('Crawling data...');
  // make http call to url
  let response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log('Error occurred while fetching data');
    return;
  }

  return response;
}

fetchData(url)
  .then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    const statsTable = $('.jobCard_mainContent > tbody > tr > td.resultContent');
    const job_title = $(statsTable).find('h2').find('span');
    const job_link = $(statsTable).find('h2').find('a');
    const job_company = $(statsTable).find('span.companyName').find('a');

    getJobData({ job_title, job_link, job_company, html, $ });
    return { $, html, job_title, job_link, job_company };
  })

  .catch((error) => {
    console.log(error);
    return error;
  });

const getJobData = ({ $, job_title, job_link, job_company }) => {
  const get_titles = job_title.filter((i, e) => {
    return $(e).text();
  });

  const titles = get_titles.get();

  const get_links = job_link.filter((i, e) => {
    return $(e);
  });

  const links = get_links.get();

  const get_companies = job_company.filter((i, e) => {
    return $(e).text();
  });

  const companies = get_companies.get();

  formatData({ titles, links, companies, $ });

  return { titles, links, companies };
};

const formatData = ({ $, titles, links, companies }) => {
  const arr_titles = [];
  const arr_links = [];
  const arr_companies = [];

  titles.forEach((e, i) => {
    const makeObject = {
      index: Number(),
      title: '',
    };
    const jobTitleObj = Object.create(makeObject);
    jobTitleObj.index = i;
    jobTitleObj.title = $(e).text();

    arr_titles.push(jobTitleObj);
  });

  links.forEach((e, i) => {
    const makeObject = {
      index: Number(),
      link: '',
    };
    const jobLinksObj = Object.create(makeObject);
    jobLinksObj.index = i;
    jobLinksObj.link = $(e).attr('href');
    arr_links.push(jobLinksObj);
  });

  companies.forEach((e, i) => {
    const makeObject = {
      index: Number(),
      company: '',
    };
    const jobCompaniesObj = Object.create(makeObject);
    jobCompaniesObj.index = i;
    jobCompaniesObj.company = $(e).text();
    arr_companies.push(jobCompaniesObj);
  });

  const mergeLinks = _.map(arr_titles, function (item) {
    return _.assign(item, _.find(arr_links, { index: item.index }));
  });
  const mergeCompany = _.map(mergeLinks, function (item) {
    return _.assign(item, _.find(arr_companies, { index: item.index }));
  });

  const mergeJobType = _.map(mergeCompany, function (item) {
    return _.assign({ job_type: 'Full-time' }, _.find(mergeCompany, { index: item.index }));
  });

  const data = mergeJobType;

  console.log(data);
  mainFunc({ data });

  return data;
};

const mainFunc = ({ data }) => {
  // start worker
  const worker = new Worker(workDir);
  console.log('Sending crawled data to dbWorker...');
  // send formatted data to worker thread
  worker.postMessage(data);
  // listen to message from worker thread
  worker.on('message', (message) => {
    console.log(message);
  });
};
