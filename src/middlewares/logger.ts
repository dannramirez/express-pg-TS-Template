import express from 'express';
import chalk from 'chalk';
import Debug from 'debug';
const debug = Debug('API:logger');

const logger = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  const url = req.url;
  const ip = req.ip;

  debug(chalk.green('url: ') + chalk.blue(url));

  debug(chalk.green('ip: ') + chalk.blue(ip));
  next();
};

export default logger;
