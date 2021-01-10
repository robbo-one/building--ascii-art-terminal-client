const fs = require('fs')

function welcome () {
  console.log('Welcome!!!!!')
}
welcome()



// PSUEDOCODE
// write function to return each individual artwork when prompted by number


function chooseArt(){
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
chooseArt()