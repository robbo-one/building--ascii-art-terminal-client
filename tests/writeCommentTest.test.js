const { test, expect } = require("@jest/globals")
const index = require("../index.js")
const fs = require("fs")

test("checking comment gets added to file", (done) => {
  //Arrange
  const expected = "yeehaw"


  //Act
  // index.appendComment("yeehaw", (data) => {
  //   const actual = data

  //   expect(actual).toBe(expected)

  //   done()
  // })

  index.appendComment("yeehaw")

  const actual = fs.readFile("./data/~comments.text", "utf-8", (err, data) => {
    if (err){
      console.log("Error! : " + err)
    } else {
      return data
    }
  })

expect(acutal).toBe(expected)


  //Assert



})