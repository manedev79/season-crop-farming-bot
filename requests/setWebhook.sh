#!/usr/bin/env bash

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"url":"https://5bd1b401be21.ngrok.io/secret-path"}' \
  https://api.telegram.org/bot${BOT_TOKEN}/setWebhook
