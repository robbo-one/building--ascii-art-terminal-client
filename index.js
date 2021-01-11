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
    })
}
