const fs = require('fs')

function loadDirectory (context, next) {
  fs.readdir('./data',
    (err, files) => handleFileList(err, files, context, next))
}

function loadFile (context, next) {
  const filename = context.files[context.currentPic]
  fs.readFile(`./data/${filename}`,
    (err, file) => handleFile(err, file, context, next))
}

function loadComments (context, next) {
  const filename = `comments-${context.files[context.currentPic]}`
  fs.readFile(`./data/comments/${filename}`,
    (err, file) => handleCommentFile(err, file, context, next))
}

function handleCommentFile (err, file, context, next) {
  if (err) {
    if (err.code === 'ENOENT') {
      return next(context)
    }
    throw Error('Something odd went wrong when reading the comments file.')
  }

  context.commentsBuf = file
  next(context)
}

function handleFile (err, file, context, next) {
  if (err) {
    throw Error('Sorry, could not load your file.')
  }
  context.buf = file
  next(context)
}

function handleFileList (err, files, context, next) {
  if (err) {
    throw Error('Sorry, could not read from the data directory.')
  }
  context.files = files
    .filter(textFilesOnly)
    .reduce(simpleHashMap, {})
  next(context)
}

function saveComment (context, next) {
  const filename = `comments-${context.files[context.currentPic]}`

  fs.open(`./data/comments/${filename}`, 'a', (err, fd) => {
    if (err) {
      throw Error('Sorry, could not write your comment.')
    }
    fs.appendFile(fd, `${context.comment}\n`, 'utf8', err => {
      fs.close(fd, err => {
        if (err) throw err
      })
      if (err) throw err
      next(context)
    })
  })
}

function simpleHashMap (result, filename, index) {
  result[index] = filename
  return result
}

function textFilesOnly (filename) {
  return filename.endsWith('.txt')
}

module.exports = {
  handleCommentFile,
  handleFile,
  handleFileList,
  loadComments,
  loadDirectory,
  loadFile,
  saveComment,
  simpleHashMap,
  textFilesOnly
}
