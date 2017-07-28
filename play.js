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


var sayHello = function() {
  console.log( this )
  return "Hello"
}.bind({name: "Rick"})

console.log( sayHello() )
