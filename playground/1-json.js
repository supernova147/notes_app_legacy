const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json') //allows us to read a file
// // a buffer is retrieved back; which is a way NodeJS represents binary data

// const dataJSON = dataBuffer.toString() //using toString method to translate the binary data to string
// const data = JSON.parse(dataJSON) //Parsing the data from dataJSON so we can retrieve a certain property
// console.log(data.title) //retrieving the title property from the parsed data.

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Alex"
data.age = "21"

const dataRewrite = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataRewrite)
//Rewrote the file so that the JSON file had a new name & age.
//Data was first read, translated, then used parsed to make the changes
// then rewrote the file using writeFileSync





// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) //stringify converts a 
// fs.writeFileSync('1-json.json', bookJSON)
// // Creates a new file named '1-json.json' then the data is retrieved from the bookJSON variable.










// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON) //parse takes in the json string & gives back the object or array
// console.log(parseData.author);

//stringify is a javascript method that takes in an object 
// or array and returns it in a json string
