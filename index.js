const fs = require('fs')


function welcome () {
  console.log('\nWelcome! \n')
}
welcome()

//************Create List of Art
function createArtList(){
fs.readdir ('./data', 'utf8', (err,fileContents) => {
  if (err) {
    console.log("something went wrong",err)
  } else {
    for(i = 0; i < fileContents.length; i++){
      console.log(i+1 + ": " + fileContents[i])
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
  rl.question("Pick a number to show the artwork, or: \n\n   'c' to comment\n   'e' to erase comments\n   'v' to view comments\n   'q' to quit\n\n" , function (input) {
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
    pressEnter()
  }
})}

//********** Return selcted image
function pickANumber (num) {
  if (num == 1) {
    return 'data/kea.txt'
  } if (num == 2) {
    return 'data/kiwi.txt'
  } if (num == 3) {
    return 'data/manaia.txt'
  } if (num == 4) {
    return 'data/nikau.txt'
  } if (num == 5) {
    return 'data/pohutukawa.txt'
  } 
}

//Uses enter key to call menu back after looping to choose aother image
function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('\nPress Enter to start again\n', function (input) {
    rl.close()
    if(input == '') {
      replay()
    }
  })
}

function userInput () {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
      rl.question('', function (input) {
        rl.close()
        } else if(input == 'q'){
          process.exit(1)
        } else if(input == 'v'){
          openComments()
        } else if (input == 'd'){
          deleteComments()
        } else if(input == 'c'){
          console.log("Add your comment\n")
        }
      }
      )} 


//If the user wants to leave a comment they can write it into the terminal and 
//it will be sent to comments.txt
function comment(data){
  fs.appendFile('./comments/comments.txt', data, 'utf8', (err) => {
    if (err){
      console.log("OH no it didn't work", err)
    } else {
      replay()
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

function deleteComments(){
  //***THIS SHOULD WORK DANG IT
  // fs.rm('./comments/comments.txt', (err) => {
  //   if (err) {
  //     console.log("Na g", err)
  //   }}
  // )
  
  fs.writeFile('./comments/comments.txt', " ", 'utf8', (err) => {
    if (err){
      console.log("OH no it didn't work", err)
    } else {
      pressEnter()
    }
  })

}


const readline = require('readline')

//Keeps cycle going in loop
function replay(){
  createArtList()
  getNumber() 
}

//declares cycle start function
function startCycle(){
createArtList()
getNumber()
} 

//Starts the cycle
startCycle()



