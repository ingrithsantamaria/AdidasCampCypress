const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl: "https://www.adidas.co/",
    chromeWebSecurity: false,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push(`--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36`);
        }
        return launchOptions;
      });
    },
  },
});
