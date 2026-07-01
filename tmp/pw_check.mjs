import { chromium } from 'playwright';

const pages = ['/', '/about/', '/services/', '/contact/', '/schedule-call-today/', '/privacy-policy/', '/terms-and-conditions/'];
const base = 'https://avalanchesales.vercel.app';
const results = [];

const browser = await chromium.launch({ headless: true });

for (const p of pages) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => pageErrors.push(err.message));
  page.on('requestfailed', req => failedRequests.push(`${req.url()} - ${req.failure()?.errorText}`));
  let status = null;
  try {
    const resp = await page.goto(base + p, { waitUntil: 'networkidle', timeout: 30000 });
    status = resp.status();
  } catch (e) {
    status = 'ERROR: ' + e.message;
  }
  const title = await page.title().catch(() => 'N/A');
  results.push({ page: p, status, title, consoleErrors, pageErrors, failedRequests });
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
