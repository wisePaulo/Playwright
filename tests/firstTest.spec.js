import { test , expect } from  '@playwright/test';

test ('test' , async ({ page }) => {
    await page.goto('https://www.lattoflex.be/nl');
    page.waitForEvent('response', response => response.request().resourceType() === 'document');
    await page.getByRole('link', { name: 'ALLE COOKIES AANVAARDEN' }).click();
  await page.getByRole('link', { name: 'ALLE COOKIES AANVAARDEN' }).waitFor({ state: 'hidden' });


await page.getByRole('link', { name: 'Dealer login', exact: true }).click();
  await page.getByPlaceholder('Username *').click();
  await page.getByPlaceholder('Username *').fill('Expert');
  await page.getByPlaceholder('Username *').press('Tab');
  await page.getByRole('button', { name: 'Vul uw Lattoflex-gebruikersnaam in.' }).press('Tab');
  await page.getByPlaceholder('Wachtwoord *').fill('Lattoflex');
  await page.getByPlaceholder('Wachtwoord *').press('Tab');
  await page.getByRole('button', { name: 'Geef het wachtwoord dat bij uw gebruikersnaam hoort.' }).press('Tab');
  await page.getByRole('button', { name: 'Inloggen' }).press('Enter');

  const page1Promise = page.waitForEvent('popup');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'download ' }).first().click();
  const page1 = await page1Promise;
  const download = await downloadPromise;
  const page2Promise = page.waitForEvent('popup');
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'download ' }).nth(1).click();
  const page2 = await page2Promise;
  const download1 = await download1Promise;
  const page3Promise = page.waitForEvent('popup');
  const download2Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'download ' }).nth(2).click();
  const page3 = await page3Promise;
  const download2 = await download2Promise;
  const page4Promise = page.waitForEvent('popup');
  const download3Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'download ' }).nth(3).click();
  const page4 = await page4Promise;
  const download3 = await download3Promise;
  await page.close();
});
