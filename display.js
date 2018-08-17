function choices (context, next) {
  console.log('\nAvailable ASCII Art')
  console.log('===================')
  Object.keys(context.files).forEach(k =>
    console.log(` ${k}. ${context.files[k]}`))
  next(context)
}

function showFile (context, next) {
  console.log(`\n${context.buf.toString('utf8')}`)
  next(context)
}

function showComments (context, next) {
  if (context.commentsBuf) {
    console.log('Comments:')
    console.log(context.commentsBuf.toString('utf8'))
  }
  next(context)
}

module.exports = {
  choices,
  showComments,
  showFile
}
