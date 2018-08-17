const readline = require('readline')

function choose (context, next) {
  if (!context.io) {
    context.io = readline.createInterface({
      input: process.stdin,
      output: process.stdout,

      terminal: false
    })
  }

  context.io.question("Choice (or 'q' to quit): ",
    choice => handleChoice(choice, context, next))
}

function comment (context, next) {
  console.log('Enter a comment (or <Enter> to go back to menu)')
  context.io.question(': ', choice => handleComment(choice, context, next))
}

function handleComment (choice, context, next) {
  if (choice === '') {
    return next(reset(context))
  }

  context.comment = choice
  next(context)
}

function handleChoice (choice, context, next) {
  if (choice === 'q') {
    context.io.close()
    process.exit(0)
  }

  const n = Number.parseInt(choice, 10)
  if (Number.isNaN(n)) {
    return next(reset(context))
  }
  if (!context.files.hasOwnProperty(choice)) {
    return next(reset(context))
  }

  context.currentPic = choice
  next(context)
}

function reset (context) {
  const { io } = context
  return { io }
}

module.exports = {
  choose,
  comment,
  handleComment,
  handleChoice,
  reset
}
