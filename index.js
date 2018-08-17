// complex-solution-bare (no comments!)

const display = require('./display')
const files = require('./files')
const input = require('./input')

;(function asciiArtReader () {
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

  function next (ctx) {
    if (isEmpty(ctx) || actionIndex === actions.length) {
      actionIndex = 0
    }
    const action = actions[actionIndex]
    actionIndex++
    action(ctx, next)
  }

  next({})
}())

function isEmpty (o) {
  const keys = Object.keys(o)
  const hasIO = keys.length === 1 && keys[0] === 'io'
  return keys.length === 0 || hasIO
}

module.exports = {
  isEmpty
}
