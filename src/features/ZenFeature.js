const axios = require('axios')

const condition = /Zen|Weisheit|Schlaues/

exports.condition = condition
exports.addTo = (bot) => bot.hears(condition, (ctx) => ctx.reply(`🤣🤣🤣 ${ctx.from.first_name}`))