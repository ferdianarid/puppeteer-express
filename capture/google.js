const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const [response] = await Promise.all([
        page.waitForResponse(response => response.url().includes('.png')),
        page.goto('https://www.google.com/')
    ]);
    const buffer = await response.buffer();
    console.log('data:image/png;base64,' + buffer.toString('base64'));

    await browser.close();
})();