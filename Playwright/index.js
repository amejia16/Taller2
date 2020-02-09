const { chromium } = require('playwright');  // Or 'chromium' or 'firefox'.

(async () => {
  //Abrir browser
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage('https://angular-6-registration-login-example.stackblitz.io/register');
  //Registrarse
  await page.waitFor(2000);
  await page.type('input[ng-reflect-name="firstName"]',"Andres");
  await page.type('input[ng-reflect-name="lastName"]',"Rodriguez");
  await page.type('input[ng-reflect-name="username"]',"usuario100");    
  await page.type('input[ng-reflect-name="password"]',"pruebas");
  await page.click('.btn-primary');
  await page.waitFor(5000);
  //Login
  await page.type('input[ng-reflect-name="username"]',"usuario100");    
  await page.type('input[ng-reflect-name="password"]',"pruebas");
  await page.click('.btn-primary');
  await page.waitFor(5000);
  //Logout
  await page.click('a[ng-reflect-router-link="/login"]');
  await page.waitFor(2000);
  //Delete
  await page.waitFor(5000);
  await page.type('input[ng-reflect-name="username"]',"usuario100");    
  await page.type('input[ng-reflect-name="password"]',"pruebas");
  await page.click('.btn-primary');
  await page.waitFor(5000);
  await page.click('.text-danger');
  await page.waitFor(5000);
  await browser.close();
})();