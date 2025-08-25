// //before using file system module (fs), we need to use the require function
// // it is how we load in core node module, another file or NPM module.
// const fs = require('fs');  //we're calling require which loads in the fs module

// //calling fs.writeFileSync to write text to notes.txt file.
// fs.writeFileSync('notes.txt', 'helloooo');
// fs.appendFileSync('notes.txt', ' byeee') //appending adds more text to the text file.

// // const add = require('./utils.js');

// // const sum = add(4, -2);

// // console.log(sum);


// const notes = require('./notes.js');

// console.log(notes);

// // require is needed to load in core node modules
// // we can also use require to load in other files as well
// // export brings vars/functions or data in general you want to transfer from one file to the other 

// const chalk = require('chalk')
// const validator = require('validator')

//Will note that I'm using ES6. Will also review legacy ways of using node.
import chalk from 'chalk';
import validator from 'validator';

import getNotes from './notes.js';

// const msg = getNotes()

// const greenMsg = chalk.green('Success!') //creating a var that utilizes chalk to change the color of a string.

// console.log(msg) //console logging msg (runs getNotes functions which was retrieved from ./notes )

// console.log(validator.isURL('https/mead.io'))

// console.log(greenMsg)

// console.log(process.argv[2]) 
// argv or "argument vector" is an array that contains the arguments provided


// I have been stuck on getting this message to turn green for a while..
// I'll come back to it so I do not hinder my progression in the course.

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding node!')
}
console.log(process.argv[2])