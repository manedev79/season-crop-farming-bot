const feature = require('./GreetingFeature')

test('Case insensitive trigger', () => {
    expect('Hi').toMatch(feature.condition)
    expect('hi').toMatch(feature.condition)
});

test('Do match only standalone words', () => {
    expect('Hi you').toMatch(feature.condition)
})

test('Do not match within words', () => {
    expect('Matthias').not.toMatch(feature.condition)

})

test('Match only at the beginning of a message', () => {
    expect('Just want to say hi').not.toMatch(feature.condition)
})