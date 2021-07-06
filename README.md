# Season Crop Farming Bot

A just for fun Telegram Bot.

## Description

We are using a webhook to implement this bot. Deployment is currently targeted to [Heroku](https://heroku.com).

### Features

1. Help command `/help`
2. Say `hi` and the bot will reply.
3. Laugh like `hahaha` and the bot will reply.

This bot can be added to group chats.

## Local Development

Use [ngrok](https://ngrok.com) for local webhook testing. 
You need to set the following environment variables:

```
export BOT_TOKEN=<your-bot-token>
export DEBUG='telegraf:*'
export URL=https://1234567890.ngrok.io
export PORT=8443
export NGROK_AUTH_TOKEN=<ngrok-auth-token>
```

## Links

[Telegram Bot API](https://core.telegram.org/bots/api)
[Telegraf](https://github.com/telegraf)
[ngrok](https://ngrok.com)