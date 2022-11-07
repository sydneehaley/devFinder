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
  await page.goto("https://indeed.com", { waitUntil: "load" });

  // Type into search box.
  // const search = await page.$('input > [aria-labelledby="label-text-input-what"]');
  await page.type(".icl-TextInput-wrapper > input", "Software Engineer");
  await page.click(".yosegi-InlineWhatWhere-primaryButton");
  // await browser.close();
})();
