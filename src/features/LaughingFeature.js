exports.condition = /[Hh][Aa][Hh][Aa].*/

exports.addTo = (bot) => bot.hears(/haha.*/, (ctx) => ctx.reply(`🤣🤣🤣 ${ctx.from.first_name}`))