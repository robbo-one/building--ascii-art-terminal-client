const fs = require("fs");
const prompt = require('prompt')

prompt.message = ''
prompt.delimiter = ': '
prompt.start()


// function listOfPic() {
//     fs.readdir("./data", "utf8", (err, data) => {
//      prompt.get ()
//       for (let i = 0; i < data.length; i++) {
//         //   console.log(data)
//         return data[i]
//       }
//     })
//   }
// let pictures = listOfPic()

// console.log(pictures)

const choice = {
  name: 'choice',
  hidden: true,
  message: 'Make your choice'
}

prompt.get(choice, function (err, result) {
  console.log(data)
//   listOfPic()
function listOfPic() {
    fs.readdir("./data", "utf8", (err, listOfPic) => {
     prompt.get ()
      for (let i = 0; i < listOfPic.length; i++) {
        //   console.log(listOfPic)
        return listOfPic[i]
      }
    })
  }

  for (let i = 0; i < data.length; i++) {
      if (i.toString() == result.choice) {
        fs.readFile("./data/" + data[i], "utf8", (err, data) => {
            console.log(data)
          })
      }
  }
//   fs.readFile("./data/" + result.choice, (err, ))
  
})