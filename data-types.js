// DATA TYPES

// 1) Strings
// 2) Numbers
// 3) Objects (+ Arrays)
// 4) Booleans
// 5) null
// 6) undefined


// STRINGS

const myName = "Tom";

const firstName = "Tom";
const lastName = 'Nightingale';
const fullName = firstName + lastName;
const myNameIs = "My name is " + firstName + " " + lastName; // concatenation
myNameIs = `My name is ${firstName} ${lastName}`;

const multiLine = `Hey,
my name
is
derek`

console.log(typeof(myNameIs));

//-------

// NUMBERS

let myNumber = "23"; // string
myNumber = 23;

console.log(myNumber * 10) // show maths in console

myNumber = 23.42424234;
console.log(Math.round(myNumber)); // Helper methods (Math.)

// Infinity (e.g. 1000 ** 1000)
// NaN

//-------

// BOOLEANS
// True or False value
let isHome = false;
if(window.location.pathname === '/') {
  isHome = true;
}

console.log(isHome);

//-------

// OBJECTS
// for grouping data together
// contain properties and methdos

const person = {
  name: "Tom",
  age: 21,
}

console.log(person);
console.log(person.name);

let propIWant = 'age';
console.log(person[propIWant]);

person.job = "Web Don"; // add to object
delete person.age; // remove from object

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//-------

const age = 21;
const person = {
  name: "Tom",
  age,
  startedIn: 2009, 
  lengthOfService: function(year) {
    return year - this.startedIn;
  },
  hobbies: ['Football','Web Dev','Gran Turismo'],
  supportsGoodFootballTeam: false,
}

const currentYear = new Date().getFullYear()
console.log(person.lengthOfService(currentYear));

const personInfo = `${person.name} has worked at Adtrak for ${person.lengthOfService(currentYear)} years.`;
console.log(personInfo);

//-------

// ARRAYS
// a lot like an object, but main diff is no keys in an array
// access items in an array using their index, so unlike objects, the order does matter in arrays
// they are 0 based

console.log(person.hobbies[1]);

// push() - Adds item(s) to the end of an array
person.hobbies.push('Cycling');
// pop() - Removes the last item from an array
person.hobbies.pop();
// unshift() - Adds item(s) to the beginning of an array
person.hobbies.unshift('Cycling');
// shift() - Removes the first item from an array
person.hobbies.shift();

console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[person.hobbies.length - 1]); // get last item

//spread operator
const person.hobbies = ['Cycling', ...person.hobbies, 'Another']

// .slice() - get a specified portion of the array
// .splice() - delete a specified portion of the array
// .includes() - determines whether an array contains a particular item, boolean
// .some() - does at least one item in array meet a given condition? boolean
// .every() - does every item in array meet a given condition? boolean
// .find() - find a particular array item (returns that array item)
// .findIndex() - find position in an array for a particular item
// .join() - combine all the array items into a single string
// .concat() - merge 2 or more arrays

console.log(person.hobbies.slice(2,4)); // Gets array items 2-3 (start at item 2, end at item 4 (end not included))
console.log(person.hobbies.splice(2,2)); // Deletes items 2-3 (start at item 2, delete 2 items from that point)
console.log(person.hobbies);

console.log(person.hobbies.includes('Football'));

//-------

// Null - essentially a value of nothing - intentionally assigned initial value
let myVar = null;

// Undefined - doesn't have a value
let myVar; // undefined


