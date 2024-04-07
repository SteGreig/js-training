// The DOM (Document Object Model)

// The document is everything inside <html>
// Everything inside <html> is an object or "node"
// It's either an element node (<div>) or a text node

// The DOM API allows us to use JS to manipulate these nodes


// Select elements
// Add/remove classes
// Add/remove other attributes
// Create/insert/remove elements/nodes


// Select elements
//--------------------------------------------------------
const btn = document.querySelector('.btn');
console.log(btn);
console.dir(btn); // return the element object and all the properties/methods
btn.textContent = "Submit Me!";
btn.innerHTML = "<span>Submit</span> Me!";
// all properties and methods on element objects: https://www.w3schools.com/jsref/dom_obj_all.asp

const listItems = document.querySelectorAll('.blocks li');
console.log(listItems);

//const btn2 = $('.my-btn');
//const listItems2 = $('.list li');


// Add/remove classes
//--------------------------------------------------------
btn.classList.remove('btn-outline--yellow');
btn.classList.add('btn-outline--red','text-sm');

listItems.forEach(function(item) {
  item.classList.add('bg-red-400');
})

//$('.list li').addClass('test');


// Add/remove other attributes
//--------------------------------------------------------
console.log(btn.type);

btn.disabled = false;

console.log(btn.dataset);
btn.dataset.value = 'testing';

console.log(btn.getAttribute('type'));
btn.setAttribute('data-value','new value');

btn.hasAttribute('disabled');
btn.removeAttribute('disabled');


// Create/insert/remove elements/nodes
//--------------------------------------------------------

var myDiv = document.createElement("div");
myDiv.setAttribute('class','my-div w-full bg-black');
myDiv.textContent = "Hello i'm a new div";

const container = document.querySelector('.container');

container.insertAdjacentElement('afterbegin', myDiv);
container.insertAdjacentHTML('afterbegin', '<div class="my-div2"></div>');
container.insertAdjacentText('beforeend', 'lorem ipsum');

// beforebegin
// afterbegin
// beforeend
// afterend

container.appendChild(myDiv);
container.insertBefore(myDiv);
container.insertAfter(myDiv);

container.remove();



