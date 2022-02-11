import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ product: 'chrome' });
  const page = await browser.newPage();
  await page.goto('https://github.com/erikfritas');
  console.log(`Acessando a página: ${page.url()}\n`);

  console.log('Salvando screenshot...');
  await page.screenshot({ path: "perfil.png" });

  console.log('Pegando nome do usuário');
  let nome = await page.$$('.p-name');
  const content = nome.pop();
  const innerHTML = await content?.getProperty('innerHTML');
  console.log(innerHTML?.toString());

  await browser.close();
})();