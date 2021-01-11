const { loadFile } = require('../index')

test('checks that the file gets read', (done) => {
  // Arrange
  const file = 'testText.txt'
  const expected = 'this is example text'
  
  // Act
  loadFile(file, (data) => {
    const actual = data
  
    // Assert
    expect(expected).toBe(actual)
    
    done()
  })


})