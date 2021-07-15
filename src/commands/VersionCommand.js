const version = require('../../package.json').version

const versionString = `Season Crop Farming Bot  \nVersion: \`${version}\``
exports.versionString = versionString
exports.addTo = (bot) => bot.command('version', (ctx) => ctx.replyWithMarkdown(versionString));
