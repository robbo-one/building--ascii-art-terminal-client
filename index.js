function welcomeMessage(user) {
    return "Welcome " + user
}

console.log(welcomeMessage("Poncho"))
const fs = require("fs")



function dataMap() {
    fs.readdir('data', 'utf8', (err, fileContents) => {

        fileContents.map((val, i) => {
            console.log(val, i)
        })
    })
}
dataMap()

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

function getArt(input, comment) {

    fs.readdir('data', 'utf8', (err, fileContents) => {

        if (input <= fileContents.length) {
            fs.readFile('./data/' + fileContents[input], 'utf8', (err, fileContents) => {
                console.log(fileContents)
                dataMap()
                pressEnter()
            })
        }
        else if (input == "q") {
            process.exit()
        }
        else if (input == "c") {

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })

            rl.question('Write a comment ', function (input) {
                rl.close()
                // Call any functions you like here.

                const comment = " " + input
                fs.appendFile('data/comments.txt', comment, 'utf8', (err) => {
                    if (err) throw err;
                    console.log(comment);
                });
            })


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
            dataMap()
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
    dataMap: dataMap
}