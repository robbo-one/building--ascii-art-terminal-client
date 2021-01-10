const fs = require('fs')
const readline = require('readline')

console.log('Kia ora!')

let newArray = []

fs.readdir('./data', 'utf8', (err, fileContents) => {
  
  if (err) {
    console.log('Something went wrong: ', err)
  } else {
    newArray = [...fileContents]
    console.log(newArray)
    for(let i = 0; i < fileContents.length; i++) {
      console.log(i +": ", fileContents[i])
    }
    //pressEnter(fileContents)
  }
}) 


function pressEnter (fileContents) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? \n', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    loadFile(input)
    //console.log(input)
  })
}

function loadFile(string) { 
  //console.log(typeof string)
  fs.readFile("./data/"+newArray[string], "utf8", (err, fileContents) => {
    if(err) {
      console.log("Something went wrong: ", err)
    }else {
      console.log(fileContents)
    }
  } )
  // fs.readFile("./data/kiwi.txt", "utf8", (err, fileContents) => {
  //     if(err) {
  //       console.log("Something went wrong: ", err)
  //     }else {
  //       console.log(fileContents)
  //     }
  //   } )
}

//console.log(newArray)
pressEnter()









