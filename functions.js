const fs = require("fs");
const readline = require("readline");

function displayList(callback) {
  fs.readdir("./data", "utf8", (err, fileContents) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      
      //displays list
      for (let i = 0; i < fileContents.length; i++) {
        console.log(i + ": ", fileContents[i]);
      }
      callback(fileContents)
    }
  });
}

function getInput(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Which file should I load? \n", function (input) {
    rl.close()
    // Call any functions you like here. For example:
    // loadFile(input);
    callback(input)
  });
  
}

function loadFile(filename /* array, input*/) {
  fs.readFile("./data/" + filename/*array[input]*/, "utf8", (err, fileContents) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      console.log(fileContents);
    }
  });

}

function createFilename(array, input) {
  return array[input]
}


module.exports = {
  displayList: displayList,
  getInput: getInput,
  loadFile: loadFile,
  createFilename: createFilename,
}