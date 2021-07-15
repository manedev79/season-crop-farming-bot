const feature = require('./VersionCommand')

const expectedVersionString = /Version: `[0-9].*`/

test('Version response contains a version', () => {
    expect(feature.versionString).toMatch(expectedVersionString)
});

test('Verify the version test regexp', () => {
    expect("Version: `123.435.1456`").toMatch(expectedVersionString)
});