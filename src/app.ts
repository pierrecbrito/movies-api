require("dotenv").config();
import express from 'express';
import config from 'config';
import db from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morgaMiddleware';

const app = express();
app.use(express.json());
app.use(morganMiddleware);

import router from './router';
app.use('/api/', router);

const PORT = config.get<number>('port');
app.listen(PORT, async () => {
    await db();
    Logger.info(`Server is running on port ${PORT}`);
});