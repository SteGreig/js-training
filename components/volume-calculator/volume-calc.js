// Volume calculator performs a very simple calculation
// - volume is simply length x width x depth

// When 'calculate' button is clicked, we want to:
// - get the 3 values and multiply them together
// - format the number
// - show the result


// Select all volume forms on the page (in case more than 1)
const volumeForms = document.querySelectorAll(".volume-form");

volumeForms.forEach((form) => {
  
  // Do the following when the Volume Calculator form is submitted
	form.addEventListener("submit", (e) => {

    e.preventDefault();

    // Get the length, depth and width values
    const l = form.querySelector('[name="length"]').value;
    const d = form.querySelector('[name="depth"]').value;
    const w = form.querySelector('[name="width"]').value;

    // Select the necessary elements so we can work with them
    const calcContainer = form.closest('.volume-calc');
    const resultContainer = calcContainer.querySelector('.volume-result-container');
    const resultNode = calcContainer.querySelector('.volume-result');
    const error = calcContainer.querySelector('.volume-error');

    // Calculate the result to 2 decimal places
    let result = Number(l*w*d).toFixed(2);

    // Format number with a comma if over 1000 (e.g. 1,000)
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Check that each field has a number greater than 0
    if (l > 0 && d > 0 && w > 0) {
      resultContainer.style.display = "block"; // Show the result section
      resultNode.innerHTML = result+'m³'; // Inset the result in .volume-result
      error.style.display = "none"; // Hide the error message
    } else {
      resultContainer.style.display = "none"; // Hide the result setion
      error.style.display = "block"; // Show the error message
    }

  })

  // Reset the form when the "reset" button is clicked
  form.querySelector('.volume-reset').addEventListener("click", function() {
    form.reset();
  })
  
});