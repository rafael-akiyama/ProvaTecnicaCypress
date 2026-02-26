const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { spawn, exec } = require('child_process');
const http = require('http');

let serverProcess = null;
let intentionalStop = false;
let lastTaskLogMessage = null;
let lastTaskLogTimestamp = 0;

function waitForServer(url, timeoutMs = 30000) {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve();
      });

      req.on('error', () => {
        if (Date.now() - startTime >= timeoutMs) {
          reject(new Error(`Servidor não respondeu em ${url} dentro de ${timeoutMs}ms`));
          return;
        }
        setTimeout(check, 500);
      });

      req.setTimeout(2000, () => {
        req.destroy();
      });
    };

    check();
  });
}

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}

async function freePort3000() {
  if (process.platform !== 'win32') {
    return;
  }

  try {
    const { stdout } = await runCommand('netstat -ano | findstr :3000');
    const pids = [...new Set(
      stdout
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.split(/\s+/).pop())
        .filter((pid) => pid && /^\d+$/.test(pid))
    )];

    for (const pid of pids) {
      await runCommand(`taskkill /PID ${pid} /T /F`).catch(() => null);
    }
  } catch {
    return;
  }
}

module.exports = {
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);

      // Habilitar detalhe dos cenários no console (BDD Logger)
      on('task', {
        log(message) {
          const now = Date.now();
          if (message === lastTaskLogMessage && now - lastTaskLogTimestamp < 1500) {
            return null;
          }

          lastTaskLogMessage = message;
          lastTaskLogTimestamp = now;
          console.log(message);
          return null;
        },
        async startApp() {
          if (serverProcess && !serverProcess.killed) {
            return null;
          }

          await freePort3000();

          serverProcess = spawn('npm', ['start'], {
            cwd: process.cwd(),
            env: {
              ...process.env,
              OPEN_BROWSER: 'false',
            },
            shell: true,
            stdio: 'pipe',
          });

          serverProcess.stdout?.on('data', (chunk) => {
            console.log(`${chunk.toString().trim()}`);
          });

          serverProcess.stderr?.on('data', (chunk) => {
            console.error(`${chunk.toString().trim()}`);
          });

          serverProcess.on('exit', (code) => {
            if (intentionalStop) {
              console.log('Sessão finalizada');
              intentionalStop = false;
            } else if (code !== 0 && code !== null) {
              console.error(`Processo finalizado inesperadamente com código ${code}`);
            }
            serverProcess = null;
          });

          await waitForServer('http://localhost:3000', 30000);
          return null;
        },
        async stopApp() {
          if (serverProcess && !serverProcess.killed) {
            intentionalStop = true;
            if (process.platform === 'win32') {
              await runCommand(`taskkill /PID ${serverProcess.pid} /T /F`).catch(() => null);
            } else {
              serverProcess.kill('SIGTERM');
            }
            serverProcess = null;
          }

          await freePort3000();
          return null;
        },
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',

    env: {
      apiBaseUrl: "http://localhost:3000",
    },
  },
};
