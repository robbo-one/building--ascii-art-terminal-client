var reader = require('./lib/reader')
var presenter = require('./lib/presenter')


presenter.welcome(console.log)

reader.dataFiles(__dirname + '/data', (files) => {
  presenter.filePrompt(files, console.log)
  console.log()
  presenter.enterAnyKey(console.log)
})

