import dotenv from 'dotenv';
dotenv.config();

interface Config {
    port: number;
    botToken: string;
    adminId: string;
    nodeEnv: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    botToken: String(process.env.BOT_TOKEN) || "",
    adminId: String(process.env.BOT_ADMIN) || "",
    nodeEnv: process.env.NODE_ENV || 'development'
};

export default config;