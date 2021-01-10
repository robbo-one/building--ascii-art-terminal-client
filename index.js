const fs = require("fs")
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


console.log("Hi, welcome to ASCII artworks! :) ")
fs.readdir("./data", 'utf-8', (err, fileList) => {
  if(err) {
    console.log("this is an error! " + err)
  } else {
    for(let i = 0; i < fileList.length; i++){
      console.log("\t" + i + ": " + fileList[i])
    }
    rl.question("What file do you want to view?", (answer) => {
      console.log("This is you answer: " + answer)
    })
  }
})





