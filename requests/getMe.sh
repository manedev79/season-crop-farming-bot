#!/usr/bin/env bash

curl https://api.telegram.org/bot${BOT_TOKEN}/getMe | jq .
