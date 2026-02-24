module.exports = {
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
};
