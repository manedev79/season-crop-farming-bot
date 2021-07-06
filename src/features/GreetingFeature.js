exports.condition = /^[Hh]i */

exports.addTo = (bot) => bot.hears(condition, (ctx) => ctx.reply('Hallo Froindä!!!'))