// This is a (reasonably) complex solution to the ascii-art-reader challenge.
// Many people struggle with "flow control" in console programs using
// callbacks, or how to pass control from one function to another without
// ending up in "callback hell". This demonstrates one approach, but it might
// be confusing for those who aren't already comfortable with passing functions
// around as values. Use your best judgement!

const display = require('./display')
const files = require('./files')
const input = require('./input')

// This is an IIFE (Immediately Invoked Function Expression). It's basically a
// function that "calls itself"! You can read more about them here:
// https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
;(function asciiArtReader () {
  // Read out loud, this also provides us with a nice description of what
  // happens when a user runs our program. Things to notice:
  //   * each element in the array is actually a function
  const actions = [
    files.loadDirectory,
    display.choices,
    input.choose,
    files.loadFile,
    files.loadComments,
    display.showFile,
    display.showComments,
    input.comment,
    files.saveComment
  ]

  let actionIndex = 0

  // Call the next function in the actions list, passing it a context object.
  // Things to notice:
  //   * you might think of `context` as similar to Express' `req` object
  function next (context) {
    // Reset to the beginning if:
    //   * the context object is empty, or
    //   * there's no more work to do in the actions list
    if (isEmpty(context) || actionIndex === actions.length) {
      actionIndex = 0
    }

    // Get the next function to call from the list above
    const action = actions[actionIndex]

    // 'Point' to the next action in the list
    actionIndex++

    // Call the function, passing it our `context` object so it can store
    // values, and `next` so it can trigger the next action when it's done.
    action(context, next)
  }

  // Get this party started
  next({})
}())

// Is our context empty, or at most has a readline interface on it?
function isEmpty (o) {
  const keys = Object.keys(o)
  const hasIO = keys.length === 1 && keys[0] === 'io'
  return keys.length === 0 || hasIO
}

module.exports = {
  isEmpty
}
