// //before using file system module (fs), we need to use the require function
// // it is how we load in core node module, another file or NPM module.
// const fs = require('fs');  //we're calling require which loads in the fs module

// //calling fs.writeFileSync to write text to notes.txt file.
// fs.writeFileSync('notes.txt', 'helloooo');
// fs.appendFileSync('notes.txt', ' byeee') //appending adds more text to the text file.

// // const add = require('./utils.js');
// // const sum = add(4, -2);
// // console.log(sum);
// const notes = require('./notes.js'); //So, we're bringing the function using require from notes.js
// const getNotes = notes(); //delcaring a var to equal the function.
// console.log(getNotes)// then we can call the function to the console log!


// // require is needed to load in core node modules
// // we can also use require to load in other files as well
// // export brings vars/functions or data in general you want to transfer from one file to the other 


const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js') //loading in NPM package, yargs

//Will note that I'm using ES6. Will also review legacy ways of using node.
//^ no longer using ES6. USING LEGACY
// import chalk from 'chalk';
// import validator from 'validator';

// import getNotes from './notes.js';

// const msg = getNotes()

const greenMsg = chalk.green('Success!') //creating a var that utilizes chalk to change the color of a string.
console.log(greenMsg); 

// ^Using node app.js - The text appeared green & chalk was successful in changing the color.

// console.log(msg) //console logging msg (runs getNotes functions which was retrieved from ./notes )

// console.log(validator.isURL('https/mead.io'))

// console.log(greenMsg)

// console.log(process.argv[2]) 
// argv or "argument vector" is an array that contains the arguments provided


// I have been stuck on getting this message to turn green for a while..
// I'll come back to it so I do not hinder my progression in the course.

// const command = process.argv[2] 
//grabbing the 2nd index of the array in argv;

console.log(process.argv[2]) //argv[2] returns the value we want; which is the user's input in the terminal.
//process = global variable; argv = argument vector - an array that contains all the arguments provided.

// if (command === 'add') { // conditional function to capture whether the user
//     console.log('Adding node!') // is trying to add a note 
// } else if (command === 'remove') {
//     console.log('Removing note') // or remove a note.
// }

//yargs - a package that assists with argument parsing.

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({ //Options object, where we can customize how it works
    command: 'add', //name of command
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', //describes what goes into title object
            demandOption: true, //there must be an input for the title object.
            type: 'string' //always have a string value for the title object
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) { //handler property that creates the action (function) that will be done when the command is called.
        // console.log(`Title: ${argv.title}`); //Grabbing title value from the property in builder
        // console.log(`Body: ${argv.body}`); 
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();

// console.log(process.argv)
// console.log(yargs.argv) // accessing the argv property on yargs
// which lets yargs know to parse the arguments.


