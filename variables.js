// VARIABLES

// var
// let
// const
// -----------------------------


// variables - used to store data, just like in other languages, php twig etc

// var
// used to be the only way to declare variables
// can be redeclared and updated
// function scoped, not block scoped

// let
// when the variable value needs to be updatable
// can be updated but not redeclared
// block scoped

// const
// when you want to lock down the variable value so it can't be updated
// can't be updated or redeclared
// block scoped


// var
// used to be the only way to declare variables
var myName = "Tom";
var myName = "Ste";
myName = "Alex";
console.log(myName);

// let
// when the variable value needs to be updatable
let myName2 = "Tom";
myName2 = "Ste";
console.log(myName2);

// const
// when you want to lock down the variable value so it can't be updated
const myName3 = "Tom";
myName3 = "Ste";
console.log(myName3);



// Function scope
//---------------------

function myFunc() {
  const myName = "Tom";
}

console.log(myName);


// Block scope
//---------------------

var myNumber = 10;

if(myNumber > 9) {
  var myName = 'Tom';
}

console.log(myName); // Tom

