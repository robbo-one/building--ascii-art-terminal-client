const fs = require('fs')
const readline = require('readline')
const prompt = require('prompt')


console.log("Welcome to Ascii Art Reader!")

console.log("Press q to exit to terminal")

menu()

function menu () {
  fs.readdir('data', (err, files) => {
    files.forEach((file, i) => {
      console.log(i, file)
    })
    pressEnter(files)
  })
}

function pressEnter (files) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  rl.question('Which file should I load? ', function (input) {
    rl.close()
    console.log(files[input])
    // Call any functions you like here. For example:
    fs.readFile('data/' + files[input], 'utf-8', (err, data) => {
      if (input == 'q') {
        process.exit()
      } else if(err) {
        console.log('Something went wrong ', err)
      } else {
        console.log(data)
        prompt.get('Hit <enter> to access menu', () => {
          menu()
        })
      }
    })
  })
}
