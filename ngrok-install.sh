#! /usr/bin/env bash

function ngrok-download () {
    if [[ ! -d ./ngrok ]]; then
        mkdir ngrok
    fi

    curl -o ./ngrok/ngrok.zip https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip

    unzip -o -d ngrok ./ngrok/ngrok.zip 
}

function ngrok-configure () {
    if [[ -z "$NGROK_AUTH_TOKEN" ]]; then
        echo "Must set NGROK_AUTH_TOKEN !!!" && exit 1
    fi
    ./ngrok/ngrok authtoken "$NGROK_AUTH_TOKEN"
}

ngrok-download
ngrok-configure