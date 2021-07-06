const feature = require('./LaughingFeature')

test('Case insensitive trigger', () => {
    expect('Haha').toMatch(feature.condition)
    expect('haha').toMatch(feature.condition)
    expect('hAHa').toMatch(feature.condition)
})

test('Long laugh matches', () => {
    expect('Hahahahahah').toMatch(feature.condition)
})