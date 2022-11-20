const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  chromeWebSecurity:false,
  defaultCommandTimeout:15000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    specPattern : "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', cucumber())
    },
  },
});
