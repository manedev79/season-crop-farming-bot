exports.condition = /[Hh]i.*/

exports.addFeature = (bot) => bot.hears(condition, (ctx) => ctx.reply('Hallo Froindä!!!'))