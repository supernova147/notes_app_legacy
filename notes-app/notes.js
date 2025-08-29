const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => { //function created that we will be exporting
    return ("Your notes...");
}

const addNote = (title, body) => { //function that will add notes
    const notes = loadNotes() //loading the parsed data
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    //debugger/debugging notes*
    //either console.log can be used to debug or debugger
    debugger
    //explicit error or no error messages are two errors that we may get when running node.js applications
    // chrome://inspect/#devices - can expect node applications with chrome's inspect page
    // 127.0.0.1:9229 -  was the port target used 
    // ReferenceError - tells you whats wrong but not where exactly its wrong at
    // 

    if (!duplicateNote) { 
        notes.push({ //using the push method to push the object & properties (title, body)
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const saveNotes = (notes) => { //function that saves notes
    const dataJSON = JSON.stringify(notes) //translate the data to a string 
    fs.writeFileSync('notes.json', dataJSON) //writes the file to 'notes.json' with dataJSON's data
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') //reading the notes from notes.json
        const dataJSON = dataBuffer.toString() //turning the data to a string
        return JSON.parse(dataJSON) //returning the parsed data
    } catch (e) { //if an error is encountered, it will return an empty array aka error handling
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes() // var that calls a function that reads the file
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    // const notesToKeep = notes.filter(function (note) { //using filter method to find the notes we want to keep
    //     return note.title !== title //returning all the notes that arent a match

    if (notes.length > notesToKeep.length) { //conditional to check if notes are available to keep.
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else { // if there is no notes, then it will return no note found
        console.log(chalk.red.inverse('No note found!'))
    }
    saveNotes(notesToKeep) //saving the new array
}
// module.exports = getNotes; //Old way of exporting a function to a new file
// export default getNotes //I had to include "default" & the written command is slightly different.
// Disregard the last comment, I'm approaching it the way Udemy has it; as close as possible.

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}


module.exports = { //recreated the export as an object so multiple functions can be exported
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}