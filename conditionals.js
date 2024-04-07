// CONDITIONAL STATEMENTS

// If Statements
// Ternaries


const age = 31;

if (age > 18) {
  console.log('go on in');
} else {
  console.log('too young :(');
}

// Will bail out after first true condition
if (age > 18) {
  console.log('go on in');
} else if (age > 30) {
  console.log('you old');
} else {
  console.log('too young :(');
}

// would need to do them separately
if (age > 18) {
  console.log('go on in');
}

if (age > 30) {
  console.log('you old');
}

// Other comparison operators - >= < <= == != === !==
if (age === 31) {
  console.log("You're 31");
}

// string/number == === difference
const age = '31';

if (Number(age) === 31) {
  console.log("You're 31");
}

const person = {
  name: 'Tom',
  age: 21,
  hobbies: ['Cars','Football','Cycling','Web Dev']
}


if(person.name === 'Tom') {
  console.log('come on in');
} else {
  console.log('access denied!');
}

// OR operator ||
//incorrect (this particular example will always return true due to 'string' being truthy)
if(person.name === 'Tom' || 'Bob') {
  console.log('come on in');
} else {
  console.log('access denied!');
}

if(person.name === 'Tom' || person.name === 'Bob') { //correct
  console.log('come on in');
} else {
  console.log('access denied!');
}

// && operator
// 3 conditions - OR operator means if either of the first 2 conditions are true, then the condition will be met
if(person.name === 'Tom' || person.name === 'Bob' && person.hobbies.includes('Reading')) {
  console.log('come on in');
} else {
  console.log('access denied!');
}

// Need to change to 2 conditions by using brackets
if((person.name === 'Tom' || person.name === 'Bob') && person.hobbies.includes('Reading')) {
  console.log('come on in');
} else {
  console.log('access denied!');
}

/*
[] - true
{} - true
-5 - true
0 - false
5 - true
'' - false
'text' - true
' ' - true
undefined - false
null - false
NaN - false
*/


// TERNARIES - simplified if statement syntax - ideal for one liners

if (person.name) {
  console.log('Person has a name!')
}

person.name ? console.log('Person has a name!') : '';
person.name === "Tom" && person.age === 21 ? console.log('Person has a name!') : '';

const count = 10;
count === 1 ? 'item' : 'items';

console.log(`You have ${count} ${count === 1 ? 'item' : 'items'} in your cart`);

// shorter version if just checking if something exists
person.name && console.log('Person has a name!');

