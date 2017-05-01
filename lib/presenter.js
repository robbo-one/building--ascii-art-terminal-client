module.exports = {
  filePrompt,
  selectArt,
  welcome
}

function welcome(printer) {
  printer("Welcome to the ASCII reader")
}

function selectArt(printer) {
  printer("Enter the number of the art to dsiplay (q to exit)")
}

function filePrompt(files, printer) {
  var counter = 0
  var msg = files.map((file) => {
    counter++
    return `${counter}. ${file}`
  }).join("\n")
  printer(msg)
}
