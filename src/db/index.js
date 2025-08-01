import { setupServer } from '../server.js';
import { initMongoConnection } from './initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};
bootstrap();
