const { Telegraf } = require('telegraf')
const HelpCommand = require('../commands/HelpCommand')
const VersionCommand = require('../commands/VersionCommand')
const GreetingFeature = require('../features/GreetingFeature')
const LaughingFeature = require('../features/LaughingFeature')

const createBot = (botToken, url, port) => {
    const bot = new Telegraf(botToken)

    HelpCommand.addTo(bot)
    VersionCommand.addTo(bot)
    GreetingFeature.addTo(bot)
    LaughingFeature.addTo(bot)

    bot.launch({
    webhook: {
        domain: url,
        port: port
    }
    })

    return bot
}

exports.createBot = createBot