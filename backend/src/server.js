import app from './app.js';
import { env, validateEnvironment } from './config/env.js';
import { prisma } from './lib/prisma.js';

validateEnvironment();

const server = app.listen(env.port, () => {
  console.log(`ErpMgmt API listening on http://localhost:${env.port}`);
});


