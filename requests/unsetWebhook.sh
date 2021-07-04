#!/usr/bin/env bash

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"url":""}' \
  https://api.telegram.org/bot${BOT_TOKEN}/setWebhook
