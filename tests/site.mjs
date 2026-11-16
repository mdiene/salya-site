// Tests de parcours : node tests/site.mjs (serveur sur http://localhost:3000, Edge installé)
import { chromium } from 'playwright';
import assert from 'node:assert/strict';

const URL_ = process.env.SITE_URL || 'http://localhost:3000/';
const browser = await chromium.launch({ channel: 'msedge' });
let failed = 0;
async function t(name, w, fn) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 500 ? 844 : 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  try {
    await page.goto(URL_);
    await page.waitForTimeout(1500);
    await fn(page);
    assert.equal(errors.length, 0, 'erreurs JS : ' + errors.join(' | '));
    console.log('ok  ', w, name);
  } catch (e) { failed++; console.log('FAIL', w, name, '-', e.message.split('\n')[0]); }
  await ctx.close();
}

for (const w of [320, 390, 1440]) {
  await t('pas de défilement horizontal', w, async (p) => {
    const o = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    assert.ok(o <= 1, 'débordement ' + o + 'px');
  });
  await t('démo guidée complète', w, async (p) => {
    const d = p.locator('#demoBox');
    await d.scrollIntoViewIfNeeded();
    await d.getByRole('button', { name: 'Continuer' }).click();
    await p.waitForSelector('text=Chargez d’abord');
    await d.getByRole('button', { name: 'Charger l’exemple' }).click();
    await d.getByRole('button', { name: 'Continuer' }).click();
    await p.waitForSelector('text=Corrigez la ligne');
    await d.getByRole('button', { name: 'Corriger' }).click();
    await d.getByRole('button', { name: 'Continuer' }).click();
    await d.getByRole('radio', { name: 'Virement bancaire' }).click();
    await d.getByRole('button', { name: 'Continuer' }).click();
    await d.getByRole('button', { name: 'Calculer la paie' }).click();
    await d.getByRole('button', { name: 'Envoyer en revue' }).waitFor();
    await d.getByRole('button', { name: 'Envoyer en revue' }).click();
    await d.getByRole('button', { name: /Approuver/ }).click();
    await d.getByRole('button', { name: 'Continuer' }).click();
    assert.ok(await d.locator('text=Virement bancaire').first().isVisible());
    await d.getByRole('button', { name: 'Lancer le règlement' }).click();
    await d.locator('text=Paie réglée, bulletins archivés').waitFor({ timeout: 8000 });
  });
  await t('formulaire : erreurs puis message copiable', w, async (p) => {
    const f = p.locator('form.form');
    await f.scrollIntoViewIfNeeded();
    await f.getByRole('button', { name: /Préparer/ }).click();
    assert.ok(await p.locator('#fName-err').isVisible(), 'erreur nom absente');
    await p.fill('#fName', 'Awa Ndiaye');
    await p.fill('#fWa', '+221 77 000 00 00');
    await f.getByRole('button', { name: /Préparer/ }).click();
    await p.waitForSelector('.sent.show pre');
    assert.match(await p.locator('.sent pre').innerText(), /Awa Ndiaye/);
  });
}
for (const w of [320, 390]) {
  await t('menu mobile : ouvre et se ferme', w, async (p) => {
    const b = p.locator('.nav__toggle');
    await b.click();
    assert.equal(await b.getAttribute('aria-expanded'), 'true');
    await b.click();
    assert.equal(await b.getAttribute('aria-expanded'), 'false');
  });
}
await browser.close();
process.exit(failed ? 1 : 0);
