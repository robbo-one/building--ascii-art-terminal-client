const { readThisFile } = require('../index')

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

