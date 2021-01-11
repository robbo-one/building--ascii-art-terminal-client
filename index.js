function welcomeMessage(user) {
    return "Welcome " + user
}

console.log(welcomeMessage("Poncho"))
const fs = require("fs")

fs.readdir('data', 'utf8', (err, fileContents) => {

    fileContents.map((val, i) => {
        console.log(val, i)
    })
})

function repeat() {
    fs.readdir('data', 'utf8', (err, fileContents) => {

        fileContents.map((val, i) => {
            console.log(val, i)
        })
    })
}

// const readline = require('readline')
const readline = require('readline')

function pressEnter() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Which file should I load? ', function (input) {
        rl.close()
        // Call any functions you like here.
        getArt(input)
    })
}


pressEnter()

function getArt(input) {

    fs.readdir('data', 'utf8', (err, fileContents) => {

        if (input <= fileContents.length) {
            fs.readFile('./data/' + fileContents[input], 'utf8', (err, fileContents) => {
                console.log(fileContents)
                repeat()
                pressEnter()
            })
        }
        else if (input == "q") {
            process.exit()
        }
        else if (input == "c") {
            const data = " and I am happy"
            fs.appendFile('data/comments.txt', data, 'utf8', (err) => {
                if (err) throw err;
                console.log(data);
            });
        }
        else if (input == "v") {
            fs.readFile('./data/comments.txt', 'utf8', (err, fileContents) => {
                console.log(fileContents)
            })
        }
        else if (input == "d") {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
            rl.question('Are you sure you want to delete comments? (y = yes, any key = no) ', function (input) {

                if (input == "y") {
                    rl.close()
                    // Call any functions you like here.
                    fs.writeFile('data/comments.txt', "", 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    rl.close()
                }
            })
        }
        else {
            console.log("No artwork found, please try again")
            repeat()
            pressEnter()
        }
    })
}


function readThisFile(filename, callback) {
    fs.readFile('./tests/' + filename, 'utf8', (err, data) => {
        if (err) {
            console.log('An error!', err)
        } else {
            callback(data)
        }
    })
}

module.exports = {
    readThisFile: readThisFile,
    welcomeMessage: welcomeMessage,
    pressEnter : pressEnter
}