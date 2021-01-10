const fs = require("fs");
const readline = require("readline");

console.log("Kia ora!");

showList();

let newArray = [];

function showList() {
  fs.readdir("./data", "utf8", (err, fileContents) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      newArray = [...fileContents];
      console.log(newArray);
      for (let i = 0; i < fileContents.length; i++) {
        console.log(i + ": ", fileContents[i]);
      }
      getInput();
    }
  });
}

function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Which file should I load? \n", function (input) {
    rl.close();

    // Call any functions you like here. For example:
    //do handling here
    
    if (parseInt(input) >= 0 && parseInt(input) <= 4) {
      loadFile(input);
    }
    
  });
}

function loadFile(input) {
    fs.readFile("./data/" + newArray[input], "utf8", (err, fileContents) => {
      if (err) {
        console.log("Something went wrong: ", err);
      } else {
        console.log(fileContents);
        showList()
      }
    });
  
}