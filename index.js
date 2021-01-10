const fs = require('fs')
const readline = require('readline')

console.log("Hi! Welcome to our Art Space!")

let artMenu = ["kea.txt", "kiwi.txt", "manaia.txt", "nikau.txt", "pohutukawa.txt"]

console.log(artMenu)

let artValues = {
1: artMenu[0],
2: artMenu[1],
3: artMenu[2],
4: artMenu[3],
5: artMenu[4],
}

function artLoop () {
for (i = 0; i < artValues.length; i++) {
  return[i]
  }
}

// user enters desired number of Artwork, function loads that specific artwork

function loadArt (input) {
fs.readFile('./data/' + artValues[input], 'utf8', (err, fileContents) => {
  if (err) {
    console.log('oopsies', err)
  } else {
    console.log('here is the bird of your choice.')
    console.log('contents!', fileContents)
  }
})
}

/*
fs.readdir('./data', 'utf8', (err, dirContents) => {
  if (err) {
    console.log('oppsies', err)
  } else {
  console.log('Choose from one of these:', dirContents)
  }

})*/


//User input needs to happen here


// const readline = require('readline')

function input () {
const rl = readline.createInterface({
     input: process.stdin,
    output: process.stdout
  })

  rl.question('Which artwork would you like?', function (input) {
    rl.close()
    console.log(input) 
    //Call any functions you like here. For example:
    loadArt(input)
    
  })
  }
input()