// When you click on a modal trigger button:
// - select the corresponding modal element
// - remove opacity-0 and invisible classes
// - add opacity-100 and visible classes

// When you click the close button OR the area outside the modal content OR press escape key
// - remove opacity-100 and visible classes
// - add opacity-0 and invisible classes


// Select all modal trigger buttons, modals, modal close buttons, and body
const modalTriggers = document.querySelectorAll('[data-modal-target]')
const modals = document.querySelectorAll("[data-modal]");
const modalCloseBtns = document.querySelectorAll("[data-modal-close]");

// Modal Active / Non-active Classes
const modalActiveClasses = ["visible","opacity-100"];
const modalNonActiveClasses = ["invisible","opacity-0"];


// Launch corresponding modal when modal trigger is clicked
modalTriggers.forEach(el => {
  el.addEventListener("click", function(e) {
    
    // Get the data-modal-target attr value from modal trigger so we can target corresponding modal
    const target = this.getAttribute('data-modal-target');
    const modal = document.querySelector(`[data-modal="${target}"]`);

    // Add/remove the necessary classes to launch the modal
    modal.classList.add(...modalActiveClasses);
    modal.classList.remove(...modalNonActiveClasses);
  });
});


// Close modal function (remove/add necessary classes)
function closeModal() {
  modals.forEach(el => {
    el.classList.remove(...modalActiveClasses);
    el.classList.add(...modalNonActiveClasses);
  });
}

// When any modal close button is clicked, run the closeModal function
modalCloseBtns.forEach(el => {
  el.addEventListener('click', closeModal)
});

// When the escape key is pressed, run the closeModal function
window.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    closeModal();
  }
});

// When the modal backdrop area is clicked, run the closeModal function
modals.forEach(el => {
  el.addEventListener("click", function (e) {
    const isOutside = !e.target.closest(".modal-content");
    if (isOutside) {
      closeModal();
    }
  });
})