// When a thumb img is selected (via click or enter)
// - change the src of the main image to the selected thumb's full size image
// - give the selected thumb some active styling

// Select all thumbnail galleries on the page
const thumbGals = document.querySelectorAll(".thumb-gallery");

const activeClass = 'border-white';
const nonActiveClass = 'border-blue-200';

thumbGals.forEach((gal) => {

  // Select the first thumb and apply the active class to it
  const firstThumb = gal.querySelector('.thumb-gallery-thumbs img:first-of-type');

  firstThumb.classList.add(activeClass);
  firstThumb.classList.remove(nonActiveClass);

  // Select all thumbs
  const allThumbs = gal.querySelectorAll('.thumb-gallery-thumbs img');

  // For each thumb, run the changeThumb function when selected
  allThumbs.forEach((thumb) => {
    thumb.addEventListener("click", (e) => { changeThumb(e) });
    thumb.addEventListener("keydown", function(e) {
      if(e.code === "Enter") {
        changeThumb(e);
      }
    });
  });

  function changeThumb(e) {

    // Remove active classes / add non-active classes to all thumbs
    e.target.closest('.thumb-gallery-thumbs').querySelectorAll('img').forEach((img) => {
      img.classList.remove(activeClass);
      img.classList.add(nonActiveClass);
    })

    // Add active classes / remove non-active classes to selected thumb
    e.target.classList.add(activeClass);
    e.target.classList.remove(nonActiveClass);
  
    // Get the full size image of the selected thumb from the element's data-full-size attribute
    const fullSize = e.target.getAttribute('data-full-size');
  
    // Replace the src value of the main image with the above variable value
    gal.querySelector('.thumb-gallery-main-img img').src = fullSize;

  }
  
});