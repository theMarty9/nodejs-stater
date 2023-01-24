// required environment variables
['NODE_ENV', 'PORT'].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

export const ENV = process.env.NODE_ENV;
export const LOGGER = {
  level: process.env.LOG_LEVEL || 'info',
  enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false,
};
export const SERVER = {
  port: Number(process.env.PORT),
};
export const CORS = {
  origin: process.env.ORIGIN,
  credentials: process.env.CREDENTIALS === 'true',
};
export const LOG_DIR = process.env.LOG_DIR;