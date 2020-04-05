const puppeteer = require('puppeteer');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/",{ waitUntil: "networkidle2" });
  //
  //send request for test item and order
});


// 1
test("bzvz test", async () => {
 
  await page.waitForSelector('[data-testid="testnaslov"]');
  const testnaslov = await page.$eval('[data-testid="testnaslov"]', e => e.innerHTML);
  expect(testnaslov).toBe("Što sve možete naći kod nas");
});

// 2
test("sets initial state to zero", async () => {
 
});

afterAll(() => {
  browser.close();
});