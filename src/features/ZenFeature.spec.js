const axios = require('axios');
jest.mock('axios')

const ZenFeature = require('./ZenFeature')

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
    const response = {data: zen}
    axios.get.mockImplementation(() => Promise.resolve(response))
    const mockContext = {
        replyWithMarkdown: jest.fn().mockReturnThis()
    };

    await ZenFeature.getZen(mockContext)
    expect(mockContext.replyWithMarkdown).toHaveBeenCalledWith(`Think about that:  \n_Do not count your chicken before they've hatched_`)
})

test('Send message without zen', async () => {
    axios.get.mockImplementation(() => {
        throw new Error('No zen today')
    })

    const mockContext = {
        reply: jest.fn().mockReturnThis()
    };
    
    await ZenFeature.getZen(mockContext)
    expect(mockContext.reply).toHaveBeenCalledWith('No zen at the moment 🤤')
})