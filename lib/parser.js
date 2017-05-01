module.exports = {
  parseInput  
}
function parseInput(line, params) {
  let {rl, files, fullFiles, presenter, reader, printer} = params
  
  if (line == 'q') {
    rl.close()
  } else if (Number(line) < 1 || Number(line) > files.length) {
    presenter.invalidInput()
  } else {
    let fileName = fullFiles[Number(line) - 1]
    reader.readArt(fileName, (txt) => {
      presenter.printArt(txt, printer)
      presenter.selectArt(printer)
      presenter.filePrompt(files, printer)
    })
  }

}
