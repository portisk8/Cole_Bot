import path from 'path';
import dotenv from 'dotenv';

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  BOT_TOKEN: string | undefined;
  MONGO_URI: string | undefined;
  USE_WEBHOOK: boolean | undefined;
  URI_WEBHOOK: string | undefined;
  PORT: number | undefined;
}

interface Config {
  BOT_TOKEN: string;
  MONGO_URI: string;
  USE_WEBHOOK: boolean;
  URI_WEBHOOK: string;
  PORT: number;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    BOT_TOKEN: process.env.BOT_TOKEN,
    MONGO_URI: process.env.MONGO_URI,
    USE_WEBHOOK: Boolean(process.env.USE_WEBHOOK),
    URI_WEBHOOK: process.env.URI_WEBHOOK,
    PORT: Number(process.env.PORT)
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  // let newConfig = new Config()
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
