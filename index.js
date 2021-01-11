const funcs = require('./functions')
const fs = require('fs')
const readline = require('readline')
const prompt = require('prompt')

//Welcome message
console.log('Welcome to Ascii Art Reader!' + '\n')

//Client instructions
console.log('Choose an artwork, or:')
console.log('Press q to exit to terminal')
console.log('Press c to make a comment')
console.log('Press v to view previous comments' + '\n')


//Defines the menu
// function menu() {
//   fs.readdir('data', (err, files) => {
//     files.forEach((file, i) => {
//       console.log(i, file)
//     })
//     pressEnter(files)
//   })
// }

//Calls a file based on input
function pressEnter(files) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('\n' + 'Enter command below:' + '\n', function (input) {
    rl.close()
    fs.readFile('data/' + files[input], 'utf-8', (err, data) => {
      if (input == 'q') {
        exit()
      } else if (input == 'c') {
        makeComment()
      } else if (input == 'v') {
        showComments()
      } else if (err) {
        console.log('Something went wrong ', err)
      } else {
        console.log(data)
        prompt.get('Press <enter> to access menu', () => {
          menu()
        })
      }
    })
  })
}

// function makeComment() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   rl.question('\n' + 'Please enter a comment: ' + '\n', function (userComment) {
//     rl.close()
//     fs.appendFile('mailbox/comments.txt', userComment + '\n', 'utf-8', (err) => {
//       if (err) throw err
//       console.log('\n' + 'The file has been saved!' + '\n')
//       menu()
//     });
//   })
// }

// function exit() {
//   console.log('\n' + 'Program terminated')
//   process.exit()
// }

// function showComments() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   fs.readFile('mailbox/comments.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log('\n' + '\n' + data)
//     prompt.get('Press <enter> to access menu', () => {
//       menu()
//   })
// })
// }

module.exports = {
  pressEnter: pressEnter
}


//Calls menu when started
funcs.menu()