const axios = require('axios').default;

const condition = /Zen|Weisheit|Schlaues/
const ZEN_URL = 'https://api.github.com/zen'

async function getZen(ctx) {
    try {
      const response = await axios.get(ZEN_URL);
      ctx.replyWithMarkdown(`Think about that:  \n_${response.data}_`)
    } catch (error) {
      ctx.reply('No zen at the moment 🤤')
    }
  }

exports.condition = condition
exports.addTo = (bot) => bot.hears(condition, (ctx) => getZen(ctx))