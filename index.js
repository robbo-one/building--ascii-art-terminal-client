// This is a (reasonably) complex solution to the ascii-art-reader challenge.
// Many people struggle with "flow control" in console programs using
// callbacks, or how to pass control from one function to another without
// ending up in "callback hell". This demonstrates one approach, but it might
// be confusing for those who aren't already comfortable with passing functions
// around as values. Use your best judgement!

const display = require('./display')
const files = require('./files')

// This is an IIFE (Immediately Invoked Function Expression). It's basically a
// function that "calls itself"! You can read more about them here:
// https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
;(function asciiArtReader () {
  let actionIndex = 0
  let context = {}

  // Read out loud, this also provides us with a nice description of what
  // happens when a user runs our program. Things to notice:
  //   * each element in the array is actually a function
  const actions = [
    files.loadDirectory,
    display.choices,
    display.input,
    files.loadFile,
    display.showFile
  ]

  // Call the next function in the actions list, passing it a context object.
  // Things to notice:
  //   * you might think of `ctx` as similar to Express' `req` object
  function next (ctx) {
    // Passing an empty object resets to the beginning
    if (isEmpty(ctx)) {
      actionIndex = 0
    }

    // Exit if there's no more work to do
    if (actionIndex === actions.length) {
      return
    }

    // Get the next function to call from the list above
    const action = actions[actionIndex]

    // 'Point' to the next action in the list
    actionIndex++

    // Call the function, passing it our `context` object so it can store
    // values, and `next` so it can trigger the next action when it's done.
    action(ctx, next)
  }

  try {
    // Get this party started
    next(context)
  } catch (err) {
    console.log('I caught this:', err.message)
    quit(context)
  }
}())

// Is our context empty, or at most has a readline interface on it?
function isEmpty (o) {
  const keys = Object.keys(o)
  const hasIO = keys.length === 1 && keys[0] === 'io'
  return keys.length === 0 || hasIO
}
