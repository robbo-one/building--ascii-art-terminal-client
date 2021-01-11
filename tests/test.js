const { readThisFile, welcomeMessage } = require('../index')

test('check it reads the file', (done) => {
    // Arrange
    const file = 'test.txt'
    const expected = 'Cat'

    // Act
    readThisFile(file, (data) => {
        const actual = data

        // Assert
        expect(actual).toEqual(expected)

        done()
    })
})

test('tests the welcome message', () => {
    // Arrange
    const expected = 'Welcome Poncho'

    // Act
    const actual = welcomeMessage("Poncho")

    // Assert
    expect(actual).toEqual(expected)

})

test('tests the welcome message', () => {
    // Arrange
    const expected = 'Welcome Poncho'

    // Act
    const actual = welcomeMessage("Poncho")

    // Assert
    expect(actual).toEqual(expected)

})