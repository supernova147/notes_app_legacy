// // const square = function (x) { //alternative syntax
// //     return x * x
// // }

// // const square = () => { //alternative syntax
// //     return x * x 
// // }

// const square = (x) => x * x //arrow function (again) with shorthand syntax

// console.log(square(3))
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() { //alternative function syntax
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => { //arrow functions dont bind their own this value
            console.log(guest + ' is attending ' + this.name)
        })
    } //however with arrow functions, they cannot bind 'this'; so its better to use
}// standard functions. arrow functions arent well suited for methods properties that are functions

event.printGuestList()