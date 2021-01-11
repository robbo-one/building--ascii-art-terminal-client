
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
function getNumber () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which picture do you want to see? Pick a number.\n', function (input) {
    rl.close()
    // Call any functions you like here. For example:
   if(input != 'q'){
    printArt(input)
   } else {
    process.exit(1)
   }
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
    getMenuAgain()
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

//Uses enter key to call menu back after looping to choose aother image
function getMenuAgain () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Press enter to see the menu again, or q to quit or if you dont like these pictures leave a comment\n', function (input) {
    rl.close()
    if(input == '') {
      replay()
    } if(input == 'q'){
      process.exit(1)
      
    } if(input == 'v'){
      openComments()
    }
    else {
      comment(input)
    }
})
}

//If the user wants to leave a comment they can write it into the terminal and 
//it will be sent to comments.txt
function comment(data){
  fs.appendFile('./comments/comments.txt', data + "\n", 'utf8', (err) => {
    if (err){
      console.log("OH no it didn't work", err)
    } else {
      getMenuAgain()
    }
  })
}

// function saveComments () {
//   fs.appendFile('./comments/comments.txt', (err) => {
//     if(err) {
//       console.log('this no good very bad stinky', err)
//     } 
//   })
// }

function openComments(input){
  const data = comment(input)
  fs.readFile('./comments/comments.txt', data, (err, fileContents) => {
    if (err){
      console.log('Yeah nah aye', err)
    } else {
      console.log(fileContents)
    }
  }) 
}

const readline = require('readline')

//Keeps cycle going in loop
function replay(){
  listArt()
  getNumber() 
}

//declares cycle start function
function startCycle(){
listArt()
getNumber()
} 
//Starts the cycle
startCycle()


//comment stuff



