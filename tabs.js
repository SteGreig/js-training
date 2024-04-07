// When a tab is clicked:
// - make this tab active and all other sibling tabs inactive
// - hide all tab panels (only within the specific tabs component where the interaction has taken place)
// - find the panel with an aria-labelledby value that matches the ID of the clicked tab



// Select all tab buttons on the page
const tabButtons = document.querySelectorAll('[role="tab"]');

// For each tab button, listen out for when it's clicked
// When it is clicked, run the changeTab function
tabButtons.forEach(function(btn) {
  btn.addEventListener('click', changeTab);
})


function changeTab(e) {

  // Select the main .tabs container of the tab that has been clicked
  const tabsParent = e.target.closest('.tabs');

  // Select only the btns / panels within that one parent container
  const btns = tabsParent.querySelectorAll("[role='tab']");
  const panels = tabsParent.querySelectorAll("[role='tabpanel']");

  // Deselect all buttons and hide all panels
  btns.forEach(btn => btn.ariaSelected = false );
  panels.forEach(panel => panel.hidden = true );

  // Set the aria-selected attribute of the clicked tab to true
  e.target.ariaSelected = true;

  // Get the ID value of the clicked tab
  const tabID = e.target.id;

  // Find the tab panel with an aria-labelledby value that matched the ID of the clicked tab
  const panelActive = tabsParent.querySelector(`[aria-labelledby="${tabID}"]`);

  // Remove the hidden attribute from that panel to make it visible
  panelActive.hidden = false;

}




//const tabsSections = document.querySelectorAll('.tabs');


// tabsSections.forEach(function(tabSection) {

//   const tabButtons = tabSection.querySelectorAll('[role="tab"]');
//   const tabPanels = tabSection.querySelectorAll('[role="tabpanel"]');

//   tabButtons.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {

//       tabButtons.forEach(btn => btn.ariaSelected = false );
//       tabPanels.forEach(panel => panel.hidden = true );

//       e.target.ariaSelected = true;

//       const tabID = e.target.id;

//       const panelActive = tabSection.querySelector(`[aria-labelledby="${tabID}"]`);
//       panelActive.hidden = false;

//     });
//   })


