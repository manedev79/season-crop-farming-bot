const condition = /^[Hh]i */

exports.condition = condition
exports.addTo = (bot) => bot.hears(condition, (ctx) => ctx.reply('Hallo Froindä!!!'))