require('dotenv').config();

import express from 'express';
import config from 'config';

import router from './router';
import Logger from '../config/logger';
import db from '../config/db';

import morganMiddleware from './middleware/morgan';

const app = express();

app.use(express.json());

app.use(morganMiddleware);

app.use('/api/', router);

const port = config.get<number>('port');

app.listen(port, async () => {
    await db();
    Logger.info('Aplicação funcionando.');
});