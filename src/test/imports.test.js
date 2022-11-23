import { test, describe, expect } from 'vitest';

/**
 * Unit test of imports
 */

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/Footer.vue')
    expect(cmp).toBeDefined()
  })

  test('normal imports as expected', async () => {
    const cmp = await import('../components/LayoutTemplate.vue')
    expect(cmp).toBeDefined()
  })

  test('normal imports as expected', async () => {
    const cmp = await import('../components/header/Header.vue')
    expect(cmp).toBeDefined()
  })

  test('normal imports as expected', async () => {
    const cmp = await import('../components/header/navBars/FirstNav.vue')
    expect(cmp).toBeDefined()
  })

  test('normal imports as expected', async () => {
    const cmp = await import('../components/header/navBars/SecondNav.vue')
    expect(cmp).toBeDefined()
  })
})