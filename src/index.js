// src/index.js

import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

async function start() {
  try {
    await initMongoConnection();
    setupServer();
  } catch (err) {
    console.error('Failed to start application:', err);
    process.exit(1);
  }
}

start();
