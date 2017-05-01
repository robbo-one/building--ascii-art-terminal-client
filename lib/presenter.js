module.exports = {
  enterAnyKey,
  filePrompt,
  welcome

}

function welcome(printer) {
  printer("Welcome to the ASCII reader")
}

function enterAnyKey(printer) {
  printer("Enter any key to continue.")
}

function filePrompt(files, printer) {
  var counter = 0
  var msg = files.map((file) => {
    counter++
    return `${counter}. ${file}`
  }).join("\n")
  printer(msg)
}
