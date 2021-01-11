const fs = require('fs')
const readline = require('readline')

let artMenu = ["kea.txt", "kiwi.txt", "manaia.txt", "nikau.txt", "pohutukawa.txt"]

let realMenu = {
  'kea 1': artMenu[0],
  'Kiwi 2': artMenu[1],
  'Manaia 3': artMenu[2],
  'Nikau 4': artMenu[3],
  'Pohutukawa 5': artMenu[4]
}

let artValues = {
  1: artMenu[0],
  2: artMenu[1],
  3: artMenu[2],
  4: artMenu[3],
  5: artMenu[4],
}

console.log("Hi! Welcome to our Art Space!") //1=Starting point

console.log(realMenu) //2=Displays realMenu with numbers/txt file accessed from artMenu indice

 //Call any functions you like here. For example:
 input() //3=calls input function

 //FUNCTIONS
function input () { //4=input asks for input.User asked for number
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Type number to load Artwork & press ENTER?', function (input) {//input = number
    rl.close()
    console.log(input)    
    loadArt(input)  //5= loadArt executed  
  })
}

function loadArt (input) {
  fs.readFile('./data/' + artValues[input], 'utf8', (err, fileContents) => {
    if (err) {
      console.log('Oopsies!', err)
    } else {
      console.log('here is the art of your choice.')
      console.log('contents!', fileContents)
      menuInput() //6=menuInput called 
    }
  })
}

function menuInput () {//7=user asked for 'menu' or 'q'
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
  rl.question('Type \'Menu\' to return to Menu\n or \'q\' to quit >', function (choice) {//menu or q
    rl.close()
    if (choice === 'menu') { 
      mainMenu() //8a=mainMenu called and realMenu displayed. User selects number.
      input() //10=input called. loops back to Line 31.
    } else if 
      (input === 'q') //user types q
      process.exit()//8b=exit from programm
  })
}

function mainMenu () {//9=mainMenu executed - realMenu displayed and user selects number 
  console.log(realMenu)
}



  



 