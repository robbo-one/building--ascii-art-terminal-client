const {file} = require("@babel/types");
const func = require("./functions");
// const fs = require("fs");
// const readline = require("readline");

function main() {
  func.displayList((array) => {
    func.getInput((input) => {
      let filename = func.createFilename(array, input);
      func.loadFile(filename);
      
    });
    
  });

}


main()


// let input = func.getInput()
// let filename = func.createFilename(array, input)
// func.loadFile(filename)
