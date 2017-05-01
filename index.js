var readline = require('readline')

var reader = require('./lib/reader')
var presenter = require('./lib/presenter')
var parser = require('./lib/parser')

presenter.welcome(console.log)

reader.dataFiles(__dirname + '/data', (files) => {
  presenter.filePrompt(files, console.log)
  console.log()
  presenter.selectArt(console.log)
})

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  parser.parseInput(line, rl)
})            
