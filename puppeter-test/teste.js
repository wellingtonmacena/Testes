const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/sza/");


  const imgList = await page.evaluate(() => {
    const HTMLElements = document.querySelectorAll(`a > div > div.KL4Bh > img`);
    const nodeList = [...HTMLElements];
    console.log(nodeList)
    const imgs = nodeList.map(item => item.src);

    return imgs;
  })

  console.log(imgList);

  fs.writeFile("imgsList.json", JSON.stringify(imgList, null, 2), null, (err) => {
    if (err) throw new Error("Something went wrong")
  });

 // await page.keyboard.type('World', { delay: 100 });

  await browser.close();
})();