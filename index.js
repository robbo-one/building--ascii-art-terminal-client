const fs = require("fs")

console.log("Hi, welcome to ASCII artworks! :) ")
fs.readdir("./data", 'utf-8', (err, fileList) => {
  if(err) {
    console.log("this is an error! " + err)
  } else {
    console.log(fileList)
  }
})

