![ci workflow](https://github.com/manedev79/season-crop-farming-bot/actions/workflows/ci.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/manedev79/season-crop-farming-bot/badge.svg?branch=main)](https://coveralls.io/github/manedev79/season-crop-farming-bot?branch=main)

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

### Prerequisites

* Linux (tested in Ubuntu)
    * Should be easy to adapt to MacOS, mainly other ngrok binary.
* curl
* jq

### SSH Tunnel to local webhook

Use [ngrok](https://ngrok.com) for local webhook testing.  


We are using [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables.  
__You must to set the following environment variables in `.env`__

```
BOT_TOKEN=<your-bot-token>
DEBUG='telegraf:*'
URL=https://1234567890.ngrok.io # Auto-set by `ngrok-start.sh`
PORT=8443
NGROK_AUTH_TOKEN=<ngrok-auth-token>
```

### NPM start script for local testing

* Start ngrok: `./ngrok-start.sh`
* Run `npm run start-local`
    * This will read the ngrok URL from the [local ngrok API](http://localhost:4040)

## Links

[Telegram Bot API](https://core.telegram.org/bots/api)
[Telegraf](https://github.com/telegraf)
[ngrok](https://ngrok.com)