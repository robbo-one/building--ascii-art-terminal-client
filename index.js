var readline = require('readline')

var reader = require('./lib/reader')
var presenter = require('./lib/presenter')
var parser = require('./lib/parser')


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

presenter.welcome(console.log)

reader.dataFiles(__dirname + '/data', (files) => {
  var fullFiles = files.map((file) => `${__dirname}/data/${file}`)

  presenter.filePrompt(files, console.log)
  console.log()
  presenter.selectArt(console.log)

  rl.on('line', (line) => {
    parser.parseInput(line, {rl, presenter, reader, files, fullFiles, printer: console.log})
  })            
})
