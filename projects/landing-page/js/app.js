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
    console.log(`Event just happended from ${section.getAttribute("data-nav")}`);
}

function highlightTheSection(section) {
    var sectionPosition = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    const correspondingBtn = document.getElementById(`${section.getAttribute('data-nav')}`);
    correspondingBtn.addEventListener('click', function() {
        correspondingBtn.classList.add('active-navbar-btn');
    })
    if(window.scrollY >= sectionPosition - sectionHeight*0.25 && window.scrollY <= sectionPosition + sectionHeight*0.25){
        section.classList.remove('your-active-class');
        section.classList.add('active-section');

        console.log(section.classList);
        console.log(`${section.getAttribute('data-nav')} is highlited now.`);
        correspondingBtn.classList.add('active-navbar-btn')
    }
    else {
        section.classList.add('your-active-class');
        section.classList.remove('active-section');
        correspondingBtn.classList.remove('active-navbar-btn');
    }
}

for(const section of sections) {
    // build the nav
    var navBarElement = document.createElement('button');
    navBarElement.className = "navBar-Element";
    navBarElement.addEventListener('click', function(){section.scrollIntoView()});
    var navBarElementText = section.getAttribute("data-nav");
    navBarElement.textContent = navBarElementText;
    navBarElement.id = navBarElementText;
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
    
    // Creating onScroll event for each section
    section.addEventListener('scroll', highlightTheSection(section));
 
    // Add an specific event listener for each section
    changeColorBtn.addEventListener("click", function(){triggerEvent(section)})

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


