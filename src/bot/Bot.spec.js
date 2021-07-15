const Bot = require('./Bot')
const GreetingFeature = require('../features/GreetingFeature')
const LaughingFeature = require('../features/LaughingFeature')
const { Telegraf } = require('telegraf')
jest.mock('telegraf')

const BOT_TOKEN = '12345_bot_token'
const URL = 'http://localhost/whatever'
const PORT = '1234'

var bot

beforeEach(() => {
    Telegraf.mockClear();
    bot = Bot.createBot(BOT_TOKEN, URL, PORT);
});

test('Bot is constructed', () => {
    expect(Telegraf).toHaveBeenCalledTimes(1);
});

test('Help command is configured', () => {
    const botMock = Telegraf.mock.instances[0]

    expect(botMock.help).toHaveBeenCalledTimes(1);
})

test('Custom commands are configured', () => {
    const botMock = Telegraf.mock.instances[0]

    expect(botMock.command.mock.calls[0][0]).toBe('version')
})

test('Features are configured', () => {
    const botMock = Telegraf.mock.instances[0]
    
    // TODO: This is bad since the test depends on the order of method calls!
    expect(botMock.hears.mock.calls[0][0]).toBe(GreetingFeature.condition);
    expect(botMock.hears.mock.calls[1][0]).toBe(LaughingFeature.condition);
})