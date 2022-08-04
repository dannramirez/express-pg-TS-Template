import {Pool, Client} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import chalk from 'chalk';
import Debug from 'debug';

const debug = Debug('API:DB');

const {POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT} = process.env;

let dbConection: Pool | null = null; // singleton o instancia unica
const setupDB = () => {
  if (!dbConection) {
    dbConection = new Pool({
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      host: POSTGRES_HOST,
      port: Number(POSTGRES_PORT),
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('ssl/ca-certificate.crt').toString(),
      },
    });
  }
  debug(chalk.green('DB Connected'));
  return dbConection;
};

export default setupDB();
