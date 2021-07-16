const axios = require('axios');
jest.mock('axios')

const mockContext = {
    replyWithMarkdown: jest.fn(),
    reply: jest.fn()
};

const ZenFeature = require('./ZenFeature')

beforeEach(() => {
    axios.mockClear()
    mockContext.replyWithMarkdown.mockClear()
    mockContext.reply.mockClear()
});

test('Trigger condition: Zen', () => {
    expect('Zen').toMatch(ZenFeature.condition)
})

test('Trigger condition: Weisheit', () => {
    expect('Weisheit').toMatch(ZenFeature.condition)
})

test('Trigger condition: Schlaues', () => {
    expect('Schlaues').toMatch(ZenFeature.condition)
})

test('Send message with zen', async () => {
    const zen = "Do not count your chicken before they've hatched"
    axios.get.mockImplementation(() => Promise.resolve({data: zen}))

    await ZenFeature.getZen(mockContext)

    expect(mockContext.replyWithMarkdown).toHaveBeenCalledWith(`Think about that:  \n_${zen}_`)
})

test('Send message without zen', async () => {
    axios.get.mockImplementation(() => {
        throw new Error('No zen today')
    })

    await ZenFeature.getZen(mockContext)

    expect(mockContext.reply).toHaveBeenCalledWith('No zen at the moment 🤤')
})