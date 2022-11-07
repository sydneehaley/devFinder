// const puppeteer = require('puppeteer');
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 1000,
    deviceScaleFactor: 1,
  });
<<<<<<< HEAD
  await page.goto("https://indeed.com", { waitUntil: "load" });

  // Type into search box.
  // const search = await page.$('input > [aria-labelledby="label-text-input-what"]');
  await page.type(".icl-TextInput-wrapper > input", "Software Engineer");
  await page.click(".yosegi-InlineWhatWhere-primaryButton");
  // await browser.close();
=======

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

  const titles = await page.$$eval(titlesSelector, (options) => {
    const getJobTitles: Element[] = [];

    options.forEach((title, i) => {
      const makeObject = {
        index: Number(),
        title: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.title = title.textContent;
      getJobTitles.push(jobLinksObj);
    });
    return getJobTitles;
  });

  const companies = await page.$$eval(companiesSelector, (options) => {
    const getJobCompanies: Element[] = [];

    options.forEach((company, i) => {
      const makeObject = {
        index: Number(),
        company: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.company = company.textContent;
      getJobCompanies.push(jobLinksObj);
    });
    return getJobCompanies;
  });

  const locations = await page.$$eval(locationsSelector, (options) => {
    const getJobLocations: Element[] = [];

    options.forEach((location, i) => {
      const makeObject = {
        index: Number(),
        location: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.location = location.textContent;
      getJobLocations.push(jobLinksObj);
    });
    return getJobLocations;
  });

  const shifts = await page.$$eval(shiftsSelector, (options) => {
    const getShiftsLocations: Element[] = [];

    options.forEach((shift, i) => {
      const makeObject = {
        index: Number(),
        shift: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = shift.textContent;
      getShiftsLocations.push(jobLinksObj);
    });
    return getShiftsLocations;
  });

  const links = await page.$$eval(linksSelector, (options) => {
    const getLinksLocations: Element[] = [];

    options.forEach((link, i) => {
      const makeObject = {
        index: Number(),
        link: '',
      };
      const jobLinksObj = Object.create(makeObject);
      jobLinksObj.index = i;
      jobLinksObj.link = link.getAttribute('href');
      getLinksLocations.push(jobLinksObj);
    });
    return getLinksLocations;
  });

  console.log(titles);
  console.log(companies);
  console.log(locations);
  console.log(shifts);
  console.log(links);
>>>>>>> f4a48ff7e15910bf5075e5b589ed3992e92fe296
})();
