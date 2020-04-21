const fetch = require('node-fetch');
const puppeteer = require('puppeteer');



const KREIRAJ_TEST_ARTIKL_URI = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/testScenarij?command=create"
const CHECK_NARUDZBU_AND_DELETE_URI = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/testScenarij?command=provjeriNarudzbu"
const BRISI_TEST_NARUDZBU = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/testScenarij?command=delete"

let browser;
let page;

beforeAll(async () => {
  //timeout to complete all tests
  jest.setTimeout(30000);
  console.log("****BRISEM TESTNI ARTIKL****")

  await fetch(BRISI_TEST_NARUDZBU).then(res => res.text())
  console.log("****KREIRAM TESTNI ARTIKL****")

  fetch(KREIRAJ_TEST_ARTIKL_URI).then(res => res.text())

  browser = await puppeteer.launch({ headless: false, });
  page = await browser.newPage();
  await page.waitFor(3000);

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });
  // await page.setViewport({ width: 1853, height: 900 })

});


// 1
test("Prva stranica - Pronađi Artikl i klikni na njega", async () => {

  await page.waitForSelector('[data-testid="listaArtikala"]', { visible: true })

  const selector = '[data-testid="TEST"]';
  await page.waitForSelector(selector, { visible: true });
  const link = await page.$eval(selector
    , element => {
      console.log(element);
      element.click()
    }
  )

  await page.waitFor(1000);
  const pageUrl = await page.url();
  var expected = "http://localhost:3000/saljidalje/detalji/TEST"
  console.log(link, expected, pageUrl, expected == pageUrl)
  //await expect(expected==pageUrl).toBe(true);

  //klik na button kupi
  const kupiBtnSelector = '[data-testid="kupi"]';
  await page.waitForSelector(kupiBtnSelector, { visible: true });
  const kupiBtn = await page.$eval(kupiBtnSelector, element => element.click())

  expect(pageUrl).toEqual(expected);


});

// const selector = '[data-testid="TEST"]';

// 2
test("UNOS PODATAKA - Unesi podatke za narudžbu", async () => {

  const imePrezimeSelector = '[data-testid="imeprezime"]';
  await page.waitForSelector(imePrezimeSelector, { visible: true });
  await page.type(imePrezimeSelector, "TEST");
 

  const adresaSelector = '[data-testid="adresa"]';
  await page.waitForSelector(adresaSelector, { visible: true });
  await page.type(adresaSelector, "TEST");

  const postagradSelector = '[data-testid="postagrad"]';
  await page.waitForSelector(postagradSelector, { visible: true });
  await page.type(postagradSelector, "TEST");

  const emailSelector = '[data-testid="email"]';
  await page.waitForSelector(emailSelector, { visible: true });
  await page.type(emailSelector, "TEST");

  await page.waitFor(3000);

  const posaljiNarudzbuSelector = '[data-testid="posaljiNarudzbu"]';
  await page.waitForSelector(posaljiNarudzbuSelector, { visible: true });
  await page.$eval(posaljiNarudzbuSelector, el => el.click());



  await page.waitFor(3000);

  expect(true).toEqual(true);

});



test("ZADNJI TEST - Provjeri je li narudžba spremljena", async () => {
  await fetch(CHECK_NARUDZBU_AND_DELETE_URI)
    .then(res => res.text())
    .then(body => expect(body).toBe("{\"narudzba \":true}"))
});






afterAll(() => {

  console.log("****BRISEM TESTNI ARTIKL****")
   fetch(BRISI_TEST_NARUDZBU).then(res => res.text())

  browser.close();

});

