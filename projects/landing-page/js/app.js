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

const navBar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll(".your-active-class");

function triggerEvent(section) {
    //console.log(section);
    console.log(`Event just happend from ${section.getAttribute("data-nav")}`);
}

for(var section of sections) {
    // build the nav
    var navBarElement = document.createElement('a');
    navBarElement.className = "navBar-Element";
    navBarElement.setAttribute("href", `#${section.id}`);
    var navBarElementText = section.getAttribute("data-nav");
    navBarElement.textContent = navBarElementText;
    //console.log(section);
    navBar.appendChild(navBarElement);

    // Creating the section : "details" with child "summary" that has a child "p".
    var sectionDetails = document.createElement("details");
    var sectionDetailsSummary = document.createElement("summary");
    var sectionDetailsPara = document.createElement("p");
    var changeColorBtn = document.createElement("button");

    sectionDetailsSummary.textContent = `${navBarElementText}`;
    sectionDetailsPara.textContent = "Check the console when pressing the button";
    changeColorBtn.textContent = "Change Color";
    changeColorBtn.className = "change-color-button"

    // Add an specific event listener for each section
    changeColorBtn.addEventListener("click", function(){triggerEvent(this.parentNode.parentNode)})

    sectionDetails.appendChild(sectionDetailsPara);
    sectionDetails.appendChild(sectionDetailsSummary);
    sectionDetails.appendChild(changeColorBtn);
    section.appendChild(sectionDetails);
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


