// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://indeed.com');

  // Type into search box.
  await page.type('.icl-TextInput-control', 'Software Engineer');

  await browser.close();
})();
