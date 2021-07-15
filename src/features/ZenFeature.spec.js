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