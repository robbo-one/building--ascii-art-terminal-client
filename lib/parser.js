module.exports = {
  parseInput  
}
function parseInput(line, params) {
  let {rl, files, presenter} = params
  
  if (line == 'q') {
    rl.close()
  } else if (Number(line) < 1 || Number(line) > files.length) {
    presenter.invalidInput()
  }
}
