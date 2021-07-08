const condition = /[Hh][Aa][Hh][Aa].*/

exports.condition = condition
exports.addTo = (bot) => bot.hears(condition, (ctx) => ctx.reply(`🤣🤣🤣 ${ctx.from.first_name}`))
