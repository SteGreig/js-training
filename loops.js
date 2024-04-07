// LOOPS

// forEach
// for of
// for
// for in
// while
// map
// filter
// reduce


// Object
let ctcTeamO = {
  Web: 'Ste',
  IM: 'Joe',
  Copy: 'Dan',
  PPC: 'Mark',
  Social: 'Lauren',
  Client: 'Chris',
}

// Array
let ctcTeamA = ['Ste', 'Joe', 'Dan', 'Mark', 'Lauren', 'Chris']

// NodeList
let blocks = document.querySelectorAll('.blocks li');


// forEach
// -------------------------------------------------
// Objects - no
// Need to convert to array via Object.entries / Object.keys / Object.values
// Object.entries - array for each object key/value pair - first is key, second is value
Object.entries(ctcTeamO).forEach(teamMember => {
  console.log(teamMember);
  console.log(teamMember[0]+': '+teamMember[1]);
})

// Arrays - yes
ctcTeamA.forEach(teamMember => {
  console.log(teamMember);
})

// NodeLists - yes
blocks.forEach(el => {
  console.log(el);
})

// forEach arguments - item, index, original array
blocks.forEach((el, i, arr) => {
  console.log(el);
  console.log(i);
  console.log(arr);
  el.querySelector('span').textContent = `${i+1} - I'm a block`;
})


// for of
// -------------------------------------------------
// Objects - again only with Object.entries etc
for (const teamMember of Object.entries(ctcTeamO)) {
  console.log(teamMember);
}

// Arrays - yes
for (const teamMember of ctcTeamA) {
  console.log(teamMember);
}

// NodeLists - yes
for (const block of blocks) {
  console.log(block);
  block.style.backgroundColor = "red";
}
console.clear();


// for
// -------------------------------------------------
// for running a block of code x amount of times

// Bit of a quirkier syntax
// requires 3 things
// initial expression (loop starts here) / condition / increment
// i = 0, and whilst i <= 10, run this loop; i++ means increment the i value by 1 each time the loop is run
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < ctcTeamA.length; i++) {
  console.log(ctcTeamA[i]);
}


// Above is better way of essentially writing:
console.log(ctcTeamA[0]);
console.log(ctcTeamA[1]);
console.log(ctcTeamA[2]);
console.log(ctcTeamA[3]);
console.log(ctcTeamA[4]);
//etc

// Can work just the same on node lists
// Can't use for Objects, as it's the index that's doing all the work - can't acces object props via index

console.clear();

// Main use case probably for when you want to iterate a loop in 2s or something
for (let i = 0; i <= 50; i += 4) {
  console.log(i);
}


// for in
// -------------------------------------------------
// Specifically for objects
// Returns the keys of your object items
for (let key in ctcTeamO) {
  console.log(key);
}

// Can use those keys to work with the values that are assigned to those keys as well
for (let key in ctcTeamO) {
  console.log(key);
  console.log(ctcTeamO.key); // can't use dot notation when using a variable - would have to be the actual property key name
  console.log(ctcTeamO[key]); // must use square brackets
}


// while
// -------------------------------------------------
// Run a block of code whilst the condition is true

let i = 0;
while(i < 20) {
  console.log('hello'+i);
  i++;
}
console.clear();


// map
// -------------------------------------------------
// map is an array method
// takes in an array, performs an operation on each array item, and returns the modified array
// it will always return the same amount of items on the other side
// should't be used to modify the dom or anything like that, should just be used to return a modified version of your array

let newArr = ctcTeamA.map(function(item) {
  return item.toLowerCase();
})

newArr = ctcTeamA.map(item => item.toLowerCase() + ' is cool')

console.log(newArr);


// filter
// -------------------------------------------------
// filter is an array method
// takes in an array, sees if each array item meets your condition, and adds it to the new array if it does

let newArr2 = ctcTeamA.filter(function(item) {
  if(item.length <= 3) {
    return true;
  } else {
    return false;
  }
})

newArr2 = ctcTeamA.filter(item => item.length <= 3 ? true : false )

console.log(newArr2);


// reduce
// -------------------------------------------------
// reduce is an array method
// takes in an array like map/filter, but this one will return just a single value
// e.g. if you have an array of numbers, you could use reduce to find the total sum of those numbers

let numbers = [10,23,11,55,37,92];

let numbersTotal = numbers.reduce(function(runningTally, currentValue) {
  console.log('tally: '+runningTally);
  console.log('current val: '+currentValue);
  return runningTally + currentValue;
})

numbersTotal = numbers.reduce((runningTally, currentValue) => runningTally + currentValue );

console.log(numbersTotal);


