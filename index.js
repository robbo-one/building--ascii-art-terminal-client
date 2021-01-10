

const fs = require('fs')

function welcome () {
  console.log('Welcome!')
}
welcome()



//************Print List of Art
function listArt(){
fs.readdir ('./data', 'utf8', (err,fileContents) => {
  if (err) {
    console.log("something went wrong",err)
  } else {
    for(i = 0; i < fileContents.length; i++){
      console.log(i + " " + fileContents[i])
    }

  }
})
}

//***********Accept user input
function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which picture do you want to see? Pick a number.', function (input) {
    rl.close()
    // Call any functions you like here. For example:
   printArt(input)
  })
}


//************* Show Art
function printArt(input){
const artFile = pickANumber(input)
fs.readFile(artFile, 'utf8', (err,fileContents) => {
  if (err){
    console.log('something went wrong', err)
  } else {
    console.log(fileContents)
  }
})}


//********** Return selcted image
function pickANumber (num) {
  if (num == 0) {
    return 'data/kea.txt'
  } if (num == 1) {
    return 'data/kiwi.txt'
  } if (num == 2) {
    return 'data/manaia.txt'
  } if (num == 3) {
    return 'data/nikau.txt'
  } if (num == 4) {
    return 'data/pohutukawa.txt'
  } 
}

const readline = require('readline')


pressEnter()
listArt()
//printArt()


