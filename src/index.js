
const fs = require('fs')
const { Telegraf } = require('telegraf')

const HelpCommand = require('./commands/HelpCommand')
const GreetingFeature = require('./features/GreetingFeature')

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const PORT = Number(process.env.PORT) || 3000;
const URL = process.env.URL || 'https://heroku-or-ngrok.org';

const bot = new Telegraf(BOT_TOKEN)
HelpCommand.addFeature(bot)
GreetingFeature.addFeature(bot)
bot.hears(/haha.*/, (ctx) => ctx.reply(`🤣🤣🤣 ${ctx.from.first_name}`))
bot.launch({
  webhook: {
    domain: URL,
    port: PORT
  }
})

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
