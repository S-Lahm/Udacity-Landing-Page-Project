/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  for (section of sections) {
    const newlist = document.createElement('li');
    newlist.className = 'nav-list';
    newlist.textContent = section.dataset.nav;
    nav.appendChild(newlist);
  };
};
// Add class 'active' to section when near top of viewport
function addActive() {
  window.addEventListener('scroll', function() {
    for (section of sections) {
      const activeSection = section.getBoundingClientRect();

      if (activeSection.top > -300 && activeSection.top < 300) {
        section.classList.add('your-active-class')
        lists = document.querySelectorAll('.nav-list')
        for (list of lists) {
          if (list.textContent == section.dataset.nav) {
            list.classList.add('your-active-class')
          } else {
            list.classList.remove('your-active-class')
          };
        };
      } else {
        section.classList.remove('your-active-class')
      };
    };
  });
};

  // Scroll to anchor ID using scrollTO event
  function scrollToAnchor() {
    window.addEventListener('click', function() {
      const clicked = event.target.textContent;
      for (section of sections) {
          if (clicked == section.dataset.nav) {
            section.scrollIntoView({behavior: "smooth"});
          };
      };
    });
};
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNav();
// Scroll to section on link click
scrollToAnchor();
// Set sections as active
addActive();
