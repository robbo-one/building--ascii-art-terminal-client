const store = require('./store')
const quit = require('./quit')

function choices (next) {
  const list = store.getList()
  console.log(list)
  next()
}

function input (next, reset) {
  const rl = store.getIOInterface()
  rl.question('Choice: ', choice => handleInput(rl, choice, next, reset))
}

function handleInput (rl, choice, next, reset) {
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
    return reset()
  }

  // What if they input a choice that's a valid number, but doesn't correspond
  // to one of our picture files?
  if (choice < 0 || choice >= store.getList().length) {
    return reset()
  }

  store.setCurrentItem(choice)
  next()
}

function showFile (next) {
  console.log(store.getBuffer().toString('utf8'))
  next()
}

module.exports = {
  choices,
  handleInput,
  input,
  showFile
}
