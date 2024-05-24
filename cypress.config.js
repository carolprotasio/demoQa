const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    experimentalModifyObstructiveThirdPartyCode: true,    
  }, 
  defaultCommandTimeout: 10000,

  retries: {
    runMode: 1, 
    openMode: 0 
  },
  
  fixturesFolder: false,
  video: false,
});
