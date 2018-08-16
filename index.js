// This is a (reasonably) complex solution to the ascii-art-reader challenge.
// Many people struggle with "flow control" in console programs using
// callbacks, or how to pass control from one function to another without
// ending up in "callback hell". This demonstrates one approach, but it might
// be confusing for those who aren't already comfortable with passing functions
// around as values. Use your best judgement!

const display = require('./display')
const files = require('./files')
const store = require('./store')

// This is an IIFE (Immediately Invoked Function Expression). It's basically a
// function that "calls itself"! You can read more about them here:
// https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
;(function asciiArtReader () {
  let actionIndex = 0

  // Notice that each 'action' is a function name?
  // Read out loud, this also provides us with a nice description of what
  // happens when a user runs our program.
  const actions = [
    files.loadDirectory,
    display.choices,
    display.input
  ]

  function next () {
    // Exit if there's no more work to do
    if (actionIndex === actions.length) {
      return
    }

    // Get the next function to call from the list above
    const action = actions[actionIndex]

    // 'Point' to the next action in the list
    actionIndex++

    // Call the function, passing it `next` so it can call it when it's done,
    // and `reset` in case it needs to start everything over.
    action(next, reset)
  }

  // Provide a way to start from scratch
  function reset () {
    actionIndex = 0
    next()
  }

  // Get this party started
  next()
}())
