require("dotenv").config();
import express from 'express';
import config from 'config';
import db from '../config/db';

const app = express();
app.use(express.json());

import router from './router';
app.use('/api/', router);

const PORT = config.get<number>('port');
app.listen(PORT, async () => {
    await db();
    console.log(`Server is running on port ${PORT}`);
});