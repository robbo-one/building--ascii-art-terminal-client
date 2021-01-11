const fs = require('fs')
const readline = require('readline')

console.log("Hi! Welcome to our Art Space!")

let artMenu = ["kea.txt", "kiwi.txt", "manaia.txt", "nikau.txt", "pohutukawa.txt"]
let realMenu = {
  'kea 1': artMenu[0],
  'Kiwi 2': artMenu[1],
  'Manaia 3': artMenu[2],
  'Nikau 4': artMenu[3],
  'Pohutukawa 5': artMenu[4]
}
console.log(realMenu)

let artValues = {
1: artMenu[0],
2: artMenu[1],
3: artMenu[2],
4: artMenu[3],
5: artMenu[4],
}

function mainMenu () {
  console.log(realMenu)
 
}

// function artLoop () {
// for (i = 0; i < artValues.length; i++) {
//   return[i]
//   }
// }

// user enters desired number of Artwork, function loads that specific artwork

function loadArt (input) {
fs.readFile('./data/' + artValues[input], 'utf8', (err, fileContents) => {
  if (err) {
    console.log('oopsies', err)
  } else {
    console.log('here is the art of your choice.')
    console.log('contents!', fileContents)
    menuInput()
  }
})
}

//User input needs to happen here


// const readline = require('readline')

function input () {
const rl = readline.createInterface({
     input: process.stdin,
    output: process.stdout
  })

  rl.question('Type number to load Artwork & press ENTER?', function (input) {
    rl.close()
    console.log(input) 
    //Call any functions you like here. For example:
    loadArt(input)
    
  })
  }
input()



function menuInput () {
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
    rl.question('Type \'Menu\' to return to Menu\n or \'q\' to quit >', function (start) {
      rl.close()
      if (start === 'menu') { 
      //Call any functions you like here. For example:
      }
      mainMenu()
      exit()
      input()
    })
    }

    function exit (keypress) {
    const q = process.exitCode
     // if (keypress === q) {
        process.exit(q)
      }
    