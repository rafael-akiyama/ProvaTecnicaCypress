const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { exec } = require('child_process');
const net = require('net');

let serverProcess;

function isPortInUse(port, callback) {
  const server = net.createServer();
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      callback(true);
    } else {
      callback(false);
    }
  });
  server.once('listening', () => {
    server.close();
    callback(false);
  });
  server.listen(port);
}

module.exports = {
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      return config; // Retorna o objeto de configuração corretamente
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
};
