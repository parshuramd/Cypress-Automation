const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  defaultCommandTimeout:15000,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl: "https://www.amazon.in/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});