require('dotenv').config()

const Bot = require('./bot/Bot')

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const PORT = Number(process.env.PORT) || 3000;
const URL = process.env.URL || 'https://heroku-or-ngrok.org';


const bot = Bot.createBot(BOT_TOKEN, URL, PORT)

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
