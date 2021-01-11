const fs = require("fs");
const readline = require("readline");

module.exports = {
  loadFile: loadFile,
  appendComment: appendComment,
};

console.log("Hi, welcome to ASCII artworks! :) ");
const fileList = fs.readdirSync("./data", "utf-8");
menu();
// console.log(fileList)

function menu() {
  for (let i = 0; i < fileList.length - 1; i++) {
    console.log("\t" + i + ": " + fileList[i]);
  }
  console.log(
    "\tc = add commment \n\tv = view comment \n\tq = quit\n\td = delete comments"
  );
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("What file do you want to view? ", (answer) => {
    rl.close();
    if (answer === "q") {
      process.exit();
    } else if (answer === "c") {
      writeComment();
    } else if (answer === "v") {
      viewComments();
    } else if (answer === "d") {
      deleteComments();
    } else {
      loadFile(fileList[answer], function (data) {
        console.log(data);
      });
    }
  });
}

function loadFile(filePath, doThisAfter) {
  // let filePath = "./data/" + fileList[input];
  fs.readFile("./data/" + filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error!" + err);
    } else {
      doThisAfter(data);
    }
  });
}

function writeComment() {
  //your comment sucks
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Please enter your comment here:  ", (answer) => {
    rl.close();
    appendComment(answer, (data) => {
      console.log("Your very 'valuable' comment has been saved.");
      menu();
    });
  });
}

function appendComment(answer, callBack) {
  fs.appendFile("./data/~comments.txt", answer + "\n", (err, data) => {
    if (err) {
      console.log("Error!: " + err);
    }
    callBack(data);
  });
}

function viewComments() {
  fs.readFile("./data/~comments.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("no comments for you!", err);
    } else {
      console.log(data);
      menu();
    }
  });
}

function deleteComments() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "are you sure you want to delete the comments? (y/n) ",
    (answer) => {
      rl.close();
      if (answer === "y") {
        clearFile();
      } else {
        menu();
      }
    }
  );
}

function clearFile() {
  fs.writeFile("./data/~comments.txt", "", (err, data) => {
    if (err) {
      console.log("no delete for you " + err);
    } else {
      console.log("comments have been deleted");
      menu();
    }
  });
}
