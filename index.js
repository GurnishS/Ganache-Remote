require('dotenv').config();
const { spawn } = require('child_process');

const mnemonic = process.env.MNEMONIC;
const args = ['--host', '0.0.0.0', '--port', '8545', '-m', mnemonic];

const ganacheProcess = spawn('ganache', args);

ganacheProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ganacheProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ganacheProcess.on('close', (code) => {
  console.log(`Ganache process exited with code ${code}`);
});
