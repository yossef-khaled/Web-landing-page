const navBar = document.querySelector("#navbar__list");
const sections = document.getElementsByTagName("section");

function triggerEvent(section) {
    //console.log(section);
    console.log(`Event just happended from ${section.getAttribute("data-nav")}`);
}

function highlightTheSection(section) {
    var sectionPosition = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    const correspondingBtn = document.getElementById(`${section.getAttribute('data-nav')}`);
    correspondingBtn.addEventListener('click', function() {
        var navbarButtons = document.getElementsByClassName('navBar-Element');
        for(const btn of navbarButtons) {
            btn.classList.remove('active-navbar-btn');
        }
        correspondingBtn.classList.add('active-navbar-btn');
        section.classList.add('your-active-class');
        console.log(section.classList);
    })
    if(window.scrollY >= sectionPosition - sectionHeight*0.25 && window.scrollY <= sectionPosition + sectionHeight*0.25){
        section.classList.add('your-active-class');
        console.log(section.classList);
        console.log(`${section.getAttribute('data-nav')} is highlited now.`);
        correspondingBtn.classList.add('active-navbar-btn')
    }
    else {
        section.classList.remove('your-active-class');
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
    window.onscroll = highlightTheSection(section);
    
    // Add an specific event listener for each section
    changeColorBtn.addEventListener("click", function(){triggerEvent(section)})

    sectionDetails.appendChild(sectionDetailsPara);
    sectionDetails.appendChild(sectionDetailsSummary);
    sectionDetails.appendChild(changeColorBtn);
    section.appendChild(sectionDetails);
}