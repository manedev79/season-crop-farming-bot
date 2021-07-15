exports.addTo = (bot) => bot.help(
    (ctx) => ctx.replyWithMarkdown(
`
*Commands*  
/help - Du bist hier
/version - Zeigt die aktuelle Bot Version an
  
*Features*  
- Sag _hi_ oder lache  😉
- Willst Du was Schlaues, Weisheiten oder Zen hören?
`));
