// FUNCTIONS

// Built in functions / methods
// Arguments / Parameters
// Custom functions
// Arrow functions


// useful for repetitive code
// functions can take in data, do something with it, and spit out something else at the end

//-------

// BUILT-IN FUNCTIONS - Examples
// console
// Math - arguments
// Date.now()
// window (alert, scrollTo)
// querySelector

//-------

// CUSTOM FUNCTIONS

function myFunc() {
  console.log('hello');
}

myFunc();

//-------

// Make a page title URL friendly
// str is the parameter
// Blinds and Shutters is the argument
function slugify(str) {
  const slug = str.replace(/ /g, '-').toLowerCase();
  return slug;
}

console.log(slug); // nope
console.log(slugify('Blinds and Shutters'));

//-------

// multiple parameters
function slugify(str, casing) {
  let slug = str.replace(/ /g, '-');
  if(casing === 'lower') {
    return slug.toLowerCase();
  } else {
    return slug;
  }
}

const pageTitle = "Blinds and Shutters";
console.log(slugify(pageTitle, 'lower')); // arguments

//-------

// default values
function slugify(str, casing = 'lower') {
  let slug = str.replace(/ /g, '-');
  if(casing === 'lower') {
    return slug.toLowerCase();
  } else {
    return slug;
  }
}

const pageTitle = "Blinds and Shutters";
console.log(slugify(pageTitle));

//-------

// function expression
const slugify = function(str, casing = 'lower') {
  let slug = str.replace(/ /g, '-');
  if(casing === 'lower') {
    return slug.toLowerCase();
  } else {
    return slug;
  }
}

//-------

// ARROW FUNCTIONS
// arrow functions always have to be put into a variable
// delete 'function' and add arrow to the right of brackets

const slugify2 = (str) => {
  let slug = str.replace(/ /g, '-').toLowerCase();
  return slug;
}

console.log(slugify2('Blinds and Shutters'));

//-------

const slugify2 = (str) => {
  return str.replace(/ /g, '-').toLowerCase();
}

console.log(slugify2('Blinds and Shutters'));

//-------

const slugify2 = (str) => str.replace(/ /g, '-').toLowerCase();

//-------

// One more example of normal function to arrow function

function cmToInches(cms) {
  const result = cms / 2.54;
  return result;
}

console.log(cmToInches(23));

//-------

const cmToInches = cms => cms / 2.54;


