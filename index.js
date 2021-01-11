const fs = require("fs");
const readline = require("readline");

console.log("Kia ora!");

// first call to start loop
showList();

//creating a new arry to have the filecontents copyied
let newArray = [];

//start of looping, displays the list and calls getInput() function
function showList() {
  fs.readdir("./data", "utf8", (err, fileContents) => {
    if (err) {
      console.log("Something went wrong: ", err);
    } else {
      newArray = [...fileContents];
      for (let i = 0; i < fileContents.length; i++) {
        console.log(i + ": ", fileContents[i]);
      }
      getInput()
      // callback(() => {
      //   loadFile(0)
      //   showList()
      // })
    }
  });
}

//this will get the input put into the terminal after asking which file to load
//(possibly make it do handling within)
function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Which file should I load? \n", function (input) {
    rl.close();

    // Call any functions you like here. For example:
    //do handling here
    if(input === "") {
      showList()
    } else if(input === "q") {
      process.exit()
    }
    else{ //if (parseInt(input) >= 0 && parseInt(input) <= 4) {
      //console.log("this is what input is: " + input)
      loadFile(input);
    }
    
  });
  
}

// loads the file and displays it in the console(calls showlist to continue loop)
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