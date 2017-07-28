//two way to write a function in js

// //way 1
// var sayHello = function() {
//   console.log("Hello")
// }
//
// console.log( sayHello() )

// //way 2
// function sayHello() {
//   return "Hello"
// }


// var sayHello = function() {
//   console.log( this )
//   return "Hello " + this.name
// }.bind({name: "Rick"})
//
// console.log( sayHello() )

// var returnFunction = function( num1 ) {
//   return function(num2) {
//     return num1 + num2
//   }
// }
//
//
// console.log( returnFunction(99)(111) )//output "210"

// var instructors = {
//   names: ["Rick","Jarrod","Darren"],
//
//   printNames: function() {
//     // console.log(this)
//     this.names.forEach( function() {
//       console.log(this)
//     }.bind(this))
//   }
// }
//
// instructors.printNames()
// var sayHello = function() {
//   console.log( this )
//   return "Hello " + this.name
// }.bind({name: "Rick"})
//
// console.log( sayHello() )

var Instructor = function(name) {
  this.name = name
}

Instructor.prototype.teach = function() {}

var jarrod = new Instructor("Jarrod")
var darren = new Instructor("Darren")
