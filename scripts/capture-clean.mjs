import { chromium } from 'playwright'

const targets = [
  {
    url: 'https://alaa-kh.github.io/Ecommerce-/',
    out: 'src/assets/projects/lumina.png',
    cleanup: async (page) => {
      const close = page.getByRole('button', { name: /close/i })
      if ((await close.count()) > 0) await close.first().click().catch(() => undefined)
      await page.keyboard.press('Escape').catch(() => undefined)
    },
  },
  {
    url: 'https://alaa-kh.github.io/Vita-Clinic/',
    out: 'src/assets/projects/vita.png',
    cleanup: async (page) => {
      const maybeLater = page.getByRole('button', { name: /maybe later/i })
      if ((await maybeLater.count()) > 0) await maybeLater.click().catch(() => undefined)
      await page.keyboard.press('Escape').catch(() => undefined)
      const closeChat = page.getByRole('button', { name: /close chat/i })
      if ((await closeChat.count()) > 0) await closeChat.click().catch(() => undefined)
    },
  },
]

const browser = await chromium.launch({ headless: true })

for (const target of targets) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 90000 })
  await page.waitForTimeout(2500)
  await target.cleanup(page)
  await page.waitForTimeout(700)
  await page.screenshot({ path: target.out, type: 'png' })
  await page.close()
  console.log('OK', target.out)
}

await browser.close()
