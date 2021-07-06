const feature = require('./GreetingFeature')

test('Case insensitive trigger', () => {
    expect('Hi').toMatch(feature.condition)
    expect('hi').toMatch(feature.condition)
});
