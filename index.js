const fs = require('fs')

console.log("Hi! Welcome to our Art Space!")

let artMenu = ["kea.txt: 1", "kiwi.txt: 2", "manaia.txt: 3", "nikau.txt: 4", "pohutakawa.txt: 5"]

console.log(artMenu)

// let one = artMenu[0]
// let two = artMenu[1]
// let three = artMenu[2]
// let four = artMenu[3]
// let five = artMenu[4]


// user enters desired number of Artwork, function loads that specific artwork

// function loadArt 
fs.readFile('./data/kea.txt', 'utf8', (err, fileContents) => {
  if (err) {
    console.log('oppsies', err)
  } else {
    console.log('here is the bird of your choice.')
    console.log('contents!', fileContents)

  }

})








// const readline = require('readline')

// function pressEnter () {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   rl.question('Which file should I load? ', function (input) {
//     rl.close()

//     // Call any functions you like here. For example:
//     loadFile(input)
//   })
// }