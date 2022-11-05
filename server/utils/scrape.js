const _ = require('lodash');
const puppeteer = require('puppeteer');
const { Worker, isMainThread, parentPort } = require('worker_threads');
const workDir = __dirname + '/dbWorker.js';

const query = 'software%20developer%20web%20developer';
const remote_fulltime = '0kf%3Aattr(DSQF7)jt(fulltime)';
const fromage = 7;
const vjk = '2b718e351fc30852';

const url = `https://www.indeed.com/jobs?q=${query}&sc=${remote_fulltime}&fromage=${fromage}`;

console.log(url);

const fetchData = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  const grabContent = await page.evaluate(() => {
    // const getJobUrls = Array.from(document.querySelectorAll('a.css-jspxzf')).map((x, index) => ({ id: index, link: x.href }));
    // const getJobUrls = document.querySelectorAll('a.css-jspxzf').map((x, index) => ({ id: index, link: x.href }));
    // const getJobTitles = Array.from(document.querySelectorAll('h2.css-bdjp2m')).map((x, index) => ({ id: index, title: x.innerText }));
    // const getJobCompanies = Array.from(document.querySelectorAll('span.companyName')).map((x, index) => ({ id: index, company: x.innerText }));
    // const getJobLocations = Array.from(document.querySelectorAll('div.companyLocation')).map((x, index) => ({ id: index, location: x.innerText }));
    // const getJobDescriptions = Array.from(document.querySelectorAll('.job-snippet > ul')).map((x, index) => ({
    //   id: index,
    //   description: x.innerText,
    // }));

    const companies = document.querySelectorAll('span.companyName');

    const getJobCompanies = [];

    companies.forEach((company, i) => {
      const makeObject = {
        index: Number(),
        company: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.company = company.innerText;
      getJobCompanies.push(jobLinksObj);
    });

    const descriptions = document.querySelectorAll('.job-snippet > ul');

    const getJobDescriptions = [];

    descriptions.forEach((description, i) => {
      const makeObject = {
        index: Number(),
        description: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.description = description.innerText;
      getJobDescriptions.push(jobLinksObj);
    });

    const locations = document.querySelectorAll('div.companyLocation');

    const getJobLocations = [];

    locations.forEach((location, i) => {
      const makeObject = {
        index: Number(),
        location: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.location = location.innerText;
      getJobLocations.push(jobLinksObj);
    });

    const titles = document.querySelectorAll('h2.css-bdjp2m');

    const getJobTitles = [];

    titles.forEach((title, i) => {
      const makeObject = {
        index: Number(),
        title: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.title = title.innerText;
      getJobTitles.push(jobLinksObj);
    });

    const links = document.querySelectorAll('a.css-jspxzf');

    const getJobUrls = [];

    links.forEach((link, i) => {
      const makeObject = {
        index: Number(),
        link: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.link = link.href;
      getJobUrls.push(jobLinksObj);
    });

    console.log('the data is:' + getJobCompanies);
    return { getJobCompanies, getJobDescriptions, getJobLocations, getJobTitles, getJobUrls };
  });

  await browser.close();

  return grabContent;
};

const sendData = () => {
  fetchData()
    .then((res) => {
      // console.log(res);
      formatSendData(res);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

sendData();

const formatSendData = (res) => {
  const { getJobCompanies, getJobDescriptions, getJobLocations, getJobTitles, getJobUrls } = res;

  const mergeDescriptions = _.map(getJobCompanies, function (item) {
    return _.assign(item, _.find(getJobDescriptions, { index: item.index }));
  });

  const mergeLocations = _.map(mergeDescriptions, function (item) {
    return _.assign(item, _.find(getJobLocations, { index: item.index }));
  });

  const mergeTitles = _.map(mergeLocations, function (item) {
    return _.assign(item, _.find(getJobTitles, { index: item.index }));
  });

  const mergeUrls = _.map(mergeTitles, function (item) {
    return _.assign(item, _.find(getJobUrls, { index: item.index }));
  });

  const jobs_data = _.map(mergeDescriptions, function (item) {
    return _.assign({ type: 'Full-time' }, _.find(mergeDescriptions, { index: item.index }));
  });

  // const test_data = [
  //   {
  //     company: "Google",
  //     description: "This is a new job at google",
  //     link: "http://google.com",
  //     type: "Fullstack",
  //     title: "Software Engineer",
  //   },
  // ];

  // console.log(jobs_data);
  console.log(jobs_data);
  // dataToDatabase({ jobs_data });

  return jobs_data;
};

const dataToDatabase = ({ test_data }) => {
  // start worker
  const worker = new Worker(workDir);
  console.log('Sending crawled data to dbWorker...');
  // send formatted data to worker thread
  worker.postMessage(test_data);
  // listen to message from worker thread
  worker.on('message', (message) => {
    console.log(message);
  });
};

module.exports = { sendData };
