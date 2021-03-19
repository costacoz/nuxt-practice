describe('Example test', () => {
  test('open app correctly', (browser) => {
    const main = browser.page.main()
    main.navigate()
    main.assert.elementPresent('.VuetifyLogo')
    browser.end()
  })
})
