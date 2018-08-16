const readline = require('readline')

const quit = require('./quit')

function choices (context, next) {
  console.log(context.files)
  next(context)
}

function input (context, next) {
  if (!context.io) {
    context.io = readline.createInterface({
      input: process.stdin,
      output: process.stdout,

      // This stops readline from echoing the character entered, keeping our
      // display a bit cleaner
      terminal: false
    })
  }
  context.io.question('Choice: ', choice => handleInput(choice, context, next))
}

function handleInput (choice, context, next) {
  // First of all, quit on `q`!
  if (choice === 'q') {
    quit()
  }

  // People try to input some funny things sometimes. Let's reject anything
  // that isn't a number. This is a crude form of _input_validation_.
  if (Number.isNaN(choice, 10)) {
    // We won't throw an error here: it's not a programmer problem, just a user
    // error. We use the `return` keyword to ensure the rest of this function
    // doesn't continue to execute.
    return next(reset(context))
  }

  // What if they input a choice that's a valid number, but doesn't correspond
  // to one of our picture files?
  if (choice < 0 || choice >= context.files.length) {
    return next(reset(context))
  }

  context.currentPic = choice
  next(context)
}

// We need a way to empty out our context object but keep the readline
// interface open, since failing to close it properly might cause weird I/O
// bugs.
function reset (context) {
  // "Give me just the bit of context that's named `io`" (destructuring
  // assignment)
  const { io } = context

  // Return a brand new object, but with our old interface in it
  return { io }
}

function showFile (context, next) {
  console.log(context.buf.toString('utf8'))
  next(context)
}

module.exports = {
  choices,
  handleInput,
  input,
  reset,
  showFile
}
