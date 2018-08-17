const fs = require('fs')

// Notice this takes the `next` function from `index.js` as a parameter, so it
// can move to the next stage when finished. To allow this to work, I've used
// an inline anonymous function (an arrow function in this case) to insert the
// extra parameter.
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
    // An error here isn't that critical... it probably just means the file
    // doesn't exist yet. We can identify this by checking the error code Node
    // gives us:
    if (err.code === 'ENOENT') {
      // Comment file doesn't exist yet, carry on
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
  // Comments for each file are saved in (e.g.) `comments-kea.txt`
  const filename = `comments-${context.files[context.currentPic]}`

  // An `fd` is a file descriptor. You can read about them in the docs:
  // https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback
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

// Store a file list as an object (effectively, a _hashmap_)
function simpleHashMap (result, filename, index) {
  result[index] = filename
  return result
}

// This helps us ignore directory names, hidden files etc
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
