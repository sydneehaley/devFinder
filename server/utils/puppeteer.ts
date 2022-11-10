// const puppeteer = require('puppeteer');
import puppeteer, { TargetFilterCallback } from 'puppeteer';
const _ = require('lodash');
const { Worker, isMainThread, parentPort } = require('worker_threads');
const workDir = __dirname + '/dbWorker.js';

interface IndeedJobs {
  companies: Object[];
  links: Object[];
  locations: Object[];
  shifts: Object[];
  titles: Object[];
}

interface Job {
  index: number;
  company: string;
  link: string;
  location: string;
  shift: string;
  title: string;
}

const fetchData = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 1000,
    deviceScaleFactor: 1,
  });

  await page.goto('https://indeed.com', { waitUntil: 'load' });

  // Type into search box.
  await page.type('#text-input-what', 'Software Engineer');
  await page.click('.yosegi-InlineWhatWhere-primaryButton');

  const titlesSelector =
    '#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.css-1m4cuuf.e37uo190 > h2';
  await page.waitForSelector(titlesSelector);

  const companiesSelector =
    '#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > span.companyName';
  await page.waitForSelector(companiesSelector);

  const locationsSelector =
    '#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > div';
  await page.waitForSelector(locationsSelector);

  const shiftsSelector =
    '#mosaic-provider-jobcards > ul > li > div > div.slider_container.css-g7s71f.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.tapItem-gutter.metadataContainer.noJEMChips.salaryOnly > div > div';
  await page.waitForSelector(shiftsSelector);

  const linksSelector = 'a.css-jspxzf';
  await page.waitForSelector(linksSelector);

  const titles: Object[] = await page.$$eval(titlesSelector, (options) => {
    const getJobTitles: Object[] = [];

    options.forEach((title, i) => {
      const titles: { index: number; title: string | null } = {
        index: i,
        title: title.textContent,
      };
      getJobTitles.push(titles);
    });
    return getJobTitles;
  });

  const companies: Object[] = await page.$$eval(companiesSelector, (options) => {
    const getJobCompanies: Object[] = [];

    options.forEach((company, i) => {
      const companies: { index: number; company: string | null } = {
        index: i,
        company: company.textContent,
      };
      getJobCompanies.push(companies);
    });
    return getJobCompanies;
  });

  const locations: Object[] = await page.$$eval(locationsSelector, (options) => {
    const getJobLocations: Object[] = [];

    options.forEach((location, i) => {
      const locations: { index: number; location: string | null } = {
        index: i,
        location: location.textContent,
      };
      getJobLocations.push(locations);
    });
    return getJobLocations;
  });

  const shifts: Object[] = await page.$$eval(shiftsSelector, (options) => {
    const getShiftsLocations: Object[] = [];

    options.forEach((shift, i) => {
      const shifts: { index: number; shift: string | null } = {
        index: i,
        shift: shift.textContent,
      };
      getShiftsLocations.push(shifts);
    });
    return getShiftsLocations;
  });

  const links: Object[] = await page.$$eval(linksSelector, (options) => {
    const getLinksLocations: Object[] = [];

    options.forEach((link, i) => {
      const links: { index: number; link: string | null } = {
        index: i,
        link: link.getAttribute('href'),
      };
      getLinksLocations.push(links);
    });
    return getLinksLocations;
  });

  return { companies, links, locations, shifts, titles };
};

const dataToDatabase = (mergeTitles: Job[] = []) => {
  // start worker
  const worker = new Worker(workDir);
  console.log('Sending crawled data to dbWorker...');

  // send formatted data to worker thread
  worker.postMessage(mergeTitles);
  // listen to message from worker thread
  worker.on('message', (message: string) => {
    console.log(message);
  });
};

const formatSendData = (res: IndeedJobs): any => {
  const { companies, links, locations, shifts, titles } = res;

  const mergeLinks = _.map(companies, function (item: any) {
    return _.assign(item, _.find(links, { index: item.index }));
  });

  const mergeLocations = _.map(mergeLinks, function (item: any) {
    return _.assign(item, _.find(locations, { index: item.index }));
  });

  const mergeShifts = _.map(mergeLocations, function (item: any) {
    return _.assign(item, _.find(shifts, { index: item.index }));
  });

  const mergeTitles: Job[] = ([] = _.map(mergeShifts, function (item: any) {
    return _.assign(item, _.find(titles, { index: item.index }));
  }));

  dataToDatabase(mergeTitles);
  return mergeTitles;
};

const sendData = () => {
  fetchData()
    .then((res) => {
      formatSendData(res);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

sendData();

module.exports = { sendData };
