// Just for fun. Each level of indent is marked with a comment.  This is almost
// certainly buggy. It's just an example of what not to do!

const fs = require('fs')
const readline = require('readline')

function asciiArtReader () {
  console.log('\nASCII Callback Hell')

  // 1
  fs.readdir('./data', (err, readdirResult) => {
    if (err) throw err

    // 2
    const files = readdirResult.filter(n => n.endsWith('.txt'))
    files.forEach((f, i) => console.log(`${i}. ${f}`))

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
    rl.question("Choice (or 'q' to quit): ", choice => {
      // 3
      if (choice === 'q') {
        rl.close()
        process.exit(0)
      }
      if (Number.isNaN(Number.parseInt(choice, 10))) {
        throw Error('Must enter a number.')
      }
      if (choice < 0 || choice >= files.length) {
        throw Error("That's not one of the files!")
      }

      fs.readFile(`./data/${files[choice]}`, (err, fileBuf) => {
        if (err) throw err

        // 4
        console.log(fileBuf.toString('utf8'))

        fs.readFile(`./data/comments/comments-${files[choice]}`, (err, commentFileBuf) => {
          if (err) {
            if (err.code !== 'ENOENT') throw err
          }

          // 5
          console.log(commentFileBuf.toString('utf8'))

          rl.question('Enter a comment (or press <Enter>): ', comment => {
            // 6
            if (comment === '') {
              rl.close()
              asciiArtReader()
              return
            }

            fs.open(`./data/comments/comments-${files[choice]}`, 'a', (err, fd) => {
              if (err) throw err

              // 7
              fs.appendFile(fd, `${comment}\n`, 'utf8', err => {
                // 8
                fs.close(fd, err => {
                  if (err) throw err
                })
                if (err) throw err

                rl.close()
                asciiArtReader()
              })
            })
          })
        })
      })
    })
  })
}

asciiArtReader()
