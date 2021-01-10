const fs = require("fs");
const readline = require("readline");


console.log("Hi, welcome to ASCII artworks! :) ");
const fileList = fs.readdirSync("./data", "utf-8");
menu()

function menu() {
  for (let i = 0; i < fileList.length; i++) {
    console.log("\t" + i + ": " + fileList[i]);
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("What file do you want to view? ", (answer) => {
    rl.close();
    if (answer === 'q') {
      process.exit()
    } else if (answer === 'c'){
      writeComment()
    } else {
      loadFile(answer);
    }
  });
}

function loadFile(input) {
  let filePath = "./data/" + fileList[input];
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error!" + err);
    } else {
      console.log(data);
    }
    menu()
  });
}

function writeComment () { //your comment sucks
  console.log("yay")
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Please enter your comment here:  ", (answer) => {
    rl.close()
    fs.writeFile('./data/comments.txt', answer, (err, data) => {
      if(err){
        console.log("Error!: " + err)
      }
      console.log("Your very 'valuable' comment has been saved.")
      menu()
    } )
  })
}
// let isValid = false
// while (!isValid) {
//   if (input > 0 && input < 5) {
//     isValid = true
//   } else {
//     console.log("try")
//   }
// }

// console.log(input)

// console.log(input)

// fs.readdir("./data", 'utf-8', (err, fileList) => {
//   if(err) {
//     console.log("this is an error! " + err)
//   } else {
//     for(let i = 0; i < fileList.length; i++){
//       console.log("\t" + i + ": " + fileList[i])
//     }
//     rl.question("What file do you want to view?", (answer) => {
//       input = answer
//       console.log("This is you answer: " + answer)
//       rl.close()
//     })
//   }
// })
