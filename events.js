// EVENTS / Event Listeners

// Events are things that happen in your page/browser - usually user interactions such as a key press, click etc
// You can listen out for those events and then do something when those events happen
// You do this with event listeners


const btn = document.querySelector('.my-btn');

/* KEYBOARD EVENTS
-------------------------
keydown
keyup
*/

document.addEventListener('keyup', function(e) {
  console.log(e);
  if(e.key === 'Enter') {
    alert('you pressed enter!');
  }
  console.log('key has been pressed!!');
})

/* MOUSE EVENTS
-------------------------
click
dblclick
contextmenu
select
wheel
mouseover
mouseout
mouseenter
mouseleave
mousedown
mouseup
mousemove
*/

console.log(btn)
btn.disabled = false;

btn.addEventListener('click', function(e) {
  console.log('you clicked me');
  console.log(e);
  console.log(e.target.textContent);
  e.target.textContent = 'you clicked me';
})

btn.addEventListener('click', changeButtonText)

function changeButtonText(e) {
  e.target.textContent = 'you clicked me';
}

/* VIEWPORT EVENTS
-------------------------
resize
scroll
*/

window.addEventListener('resize', () => {
  console.log('you are resizing your browser!!');
  console.log(`Your viewport width is ${window.innerWidth}`);
})

/* FORM / INPUT EVENTS
-------------------------
change
focus
blur
submit
reset
*/

/* CSS TRANSITION EVENTS
-------------------------
animationstart
animationend
animationiteration
transitionstart
transitionend
transitionrun
transitioncancel
*/

btn.addEventListener('transitionstart', function() {
  console.log('transition started');
})

btn.addEventListener('transitionend', function() {
  console.log('transition ended');
})