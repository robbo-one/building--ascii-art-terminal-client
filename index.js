function welcomeMessage(user) {

    console.log("Welcome " + user)

}

welcomeMessage("Henry")
const fs = require("fs")

fs.readdir('data', 'utf8', (err, fileContents) => {

    fileContents.map((val, i) => {
        console.log(val, i)
    })

})

fs.readFile('./data/kea.txt', 'utf8', (err, fileContents) => {

    // console.log(fileContents)

})


// const readline = require('readline')
const readline = require('readline')

function pressEnter() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Which file should I load? ', function (input) {
        rl.close()

        // Call any functions you like here. For example:
        getArt(input)
    })
}

console.log(pressEnter(1))


function getArt(input) {

    if (input == 0) {
        fs.readFile('./data/kea.txt', 'utf8', (err, fileContents) => {

            console.log(fileContents)

        })
    }
    else if (input == 1) {
        fs.readFile('./data/kiwi.txt', 'utf8', (err, fileContents) => {

            console.log(fileContents)

        })
    }

    else if (input == 2) {
        fs.readFile('./data/manaia.txt', 'utf8', (err, fileContents) => {

            console.log(fileContents)

        })
    }
    else if (input == 3) {
        fs.readFile('./data/nikau.txt', 'utf8', (err, fileContents) => {

            console.log(fileContents)

        })
    }
    else if (input == 4) {
        fs.readFile('./data/pohutukawa.txt', 'utf8', (err, fileContents) => {

            console.log(fileContents)

        })
    }
    else {
        return null
    }


}