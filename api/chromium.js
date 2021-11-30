const core = require("puppeteer-core");

// import { getOptions } from './options';
import chrome from "chrome-aws-lambda";
const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function getOptions(isDev) {
  let options;
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
      ignoreDefaultArgs: ["--disable-extensions"],
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }
  return options;
}

let _page;

async function getPage(isDev) {
  if (_page) return _page;
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
}

async function getScreenshot(html, type, isDev) {
  const page = await getPage(isDev);
  await page.setViewport({ width: 1200, height: 600 });
  await page.setContent(html);
  const file = await page.screenshot({ type });
  return file;
}

module.exports = {
  getScreenshot,
};
