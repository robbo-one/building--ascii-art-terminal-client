const main = require('./index')
const fs = require('fs')
const readline = require('readline')
const prompt = require('prompt')


function menu() {
  console.log(main)
  fs.readdir('data', (err, files) => {
    files.forEach((file, i) => {
      console.log(i, file)
    })
    main.pressEnter(files)
  })
}

function makeComment() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('\n' + 'Please enter a comment: ' + '\n', function (userComment) {
    rl.close()
    fs.appendFile('mailbox/comments.txt', userComment + '\n', 'utf-8', (err) => {
      if (err) throw err
      console.log('\n' + 'The file has been saved!' + '\n')
      menu()
    });
  })
}

function exit() {
  console.log('\n' + 'Program terminated')
  process.exit()
}

function showComments() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  fs.readFile('mailbox/comments.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log('\n' + '\n' + data)
    prompt.get('Press <enter> to access menu', () => {
      menu()
  })
})
}


module.exports = {
  menu: menu,
  makeComment: makeComment,
  exit: exit,
  showComments: showComments
}