const fetch = require('node-fetch');
const puppeteer = require('puppeteer');



const KREIRAJ_TEST_ARTIKL_URI = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/testScenarij?command=create"
const CHECK_NARUDZBU_AND_DELETE_URI = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/testScenarij?command=provjeriNarudzbu&id=TEST"
const BRISI_TEST_NARUDZBU = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/testScenarij?command=delete"

let browser;
let page;

beforeAll(async () => {

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


  await page.waitForSelector('[data-testid="listaArtikala"]', {visible: true})

  const selector = '[data-testid="TEST"]';
  await page.waitForSelector(selector, {visible: true});
  const link = await page.$eval(selector
   , element =>{console.log(element);
    element.click()
  }
     )
  
  await page.waitFor(1000);
  const pageUrl = await  page.url();
  var expected = "http://localhost:3000/saljidalje/detalji/TEST"
  console.log(link,expected,pageUrl,expected==pageUrl)
  //await expect(expected==pageUrl).toBe(true);
  expect(pageUrl).toEqual(expected);
  
},1000);

// 2
test("ZADNJI TEST - Provjeri je li narudžba spremljena", async () => {
  await fetch(CHECK_NARUDZBU_AND_DELETE_URI)
    .then(res => res.text())
    .then(body => expect(body).toBe("{\"narudzba \":true}"))
},10*1000);





afterAll(() => {
  browser.close();

});

