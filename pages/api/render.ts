import { NextApiHandler } from 'next';
import puppeteer from 'puppeteer';

export const Handler: NextApiHandler = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://indeed.com');

  // Type into search box.
  await page.type('#text-input-what', 'Software Engineer');

  await browser.close();
};
