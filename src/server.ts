import { Bot } from "grammy";
import 'dotenv/config';

import express from 'express';
import itemRoutes from './routes/application/application.controller';
import { errorHandler } from './middlewares/errorHandler';
import config from "./config/config";

export const bot = new Bot(config.botToken);
bot.start();

export const app = express();

app.use(express.json());

app.use('/application', itemRoutes);
app.use(errorHandler);