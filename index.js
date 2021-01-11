const fs = require("fs")

console.log("Hello art lovers")

const readline = require("readline")

function listOfPic() {
  fs.readdir("./data", "utf8", (err, data) => {
    pressEnter(data)
    for (let i = 0; i < data.length; i++) {
      return data[i]
    }
  })
}

listOfPic()

function pressEnter(data) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question("Which file should I load? ", function (input) {
    rl.close()
    console.log(input, data)

    // Call any functifs.reaons you like here. For example:

    for (let i = 0; i < data.length; i++) {
      console.log(data[i])
      if (input == i) {
        fs.readFile("./data/" + data[i], "utf8", (err, data) => {
          console.log(data)
        })
      }
    }

  })
}

// fs.readFile("listOfPic", "utf8", () => {
//     console.log(listOfPic[input])
// })

// fs.readFile ('./data/kea.txt', "utf8", (err, data) => {
//     console.log (data)
// })


