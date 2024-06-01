const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bwyg8s',
  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    experimentalModifyObstructiveThirdPartyCode: true,    
  }, 
  defaultCommandTimeout: 10000,
  requestMode: true,

  retries: {
    runMode: 1, 
    openMode: 0 
  },
  
  
  video: false,
});
