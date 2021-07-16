const HelpCommand = require('./HelpCommand')

const mockContext = {
    replyWithMarkdown: jest.fn()
}

beforeEach(() => {
    mockContext.replyWithMarkdown.mockClear()
})

test('Help command contains keywords', () => {
    HelpCommand.helpCommand(mockContext)

    const reply = mockContext.replyWithMarkdown.mock.calls[0][0]
    expect(reply).toMatch(/Commands/)
    expect(reply).toMatch(/\/help/)
    expect(reply).toMatch(/\/version/)
    expect(reply).toMatch(/Features/)
    expect(reply).toMatch(/hi/)
    expect(reply).toMatch(/lache/)
    expect(reply).toMatch(/Schlaues/)
    expect(reply).toMatch(/Weisheit/)
    expect(reply).toMatch(/Zen/)
})