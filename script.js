function addClass(classs){
    let classElements = document.getElementById(classs).querySelectorAll("*")
    for (let i = 0; i < classElements.length; i++) {
        classElements[i].classList.add(classs);
    }
}

function disableScroll() {
    container.style.position = "fixed";
    container.style.overflow = "hidden";
}

function allowScroll() {
    container.style.position = "relative";
    container.style.overflow = "scroll";
}

var container = document.getElementById("container");
var all = document.getElementById("all");
const widthAbout = window.matchMedia("(min-width: 850px)");
const widthPerson = window.matchMedia("(min-width: 1018px)");

//About thickbox
var about = document.getElementById("about");
var closeButton = document.getElementById("closebtn");

//Detail thickbox
var person = document.getElementById("person");
var rightButton = document.getElementById("right-button");
var leftButton = document.getElementById("left-button");

//Filter
var filterContent = document.getElementById("filter-content");
var showFilter = document.getElementById("show");
var arrow = document.getElementById("arrow");

//thickbox's state
var filterBool = true;
var aboutBool = false;
var personBool = false;


//give all elements inside class: about, person....
addClass("about");
addClass("person");

//open or close thickboxes 
document.addEventListener("click", function (e) {

    if (filterBool == true && (e.target.id == "show" || e.target.id == "arrow")) {
        closeFilter();
    }
    else if (filterBool == false && (e.target.id == "show" || e.target.id == "arrow" || e.target.id == "show-hide-filter")) {
        openFilter();
    }

    else if (aboutBool == true && e.target.className != "about") {
        closeAbout();
    }
    else if (aboutBool == false && e.target.id == "aboutButton") {
        openAbout();
    }

    else if (personBool == true && (e.target.className != "person")) {
        closePerson();
    }
    else if (personBool == false && e.target.className == "person-photo") {
        openPerson();
    }


})

function openAbout() {
    aboutBool = true;
    about.style.padding = "3em";
    all.style.display = "block";
    closeButton.style.display = "block";
    disableScroll();

    if (widthAbout.matches) {
        about.style.width = "70vw";
    }
    else if (!widthAbout.matches) {
        about.style.width = "90vw";
    }

}

function closeAbout() {
    aboutBool = false;
    about.style.width = "0";
    about.style.padding = "0";
    all.style.display = "none";
    allowScroll();
}

function openPerson() {
    personBool = true;
    person.style.padding = "2em";
    person.style.display = "block";
    all.style.display = "block";
    rightButton.style.display = "block";
    leftButton.style.display = "block";
    disableScroll();


    if (widthPerson.matches) {
        person.style.width = "55vw";
    }
    else if (!widthPerson.matches) {
        person.style.width = "80vw";
    }

    
}

function closePerson() {
    personBool = false;
    person.style.width = "0";
    person.style.padding = "0";
    person.style.display = "none";
    all.style.display = "none";
    rightButton.style.display = "none";
    leftButton.style.display = "none";
    allowScroll()
}

function openFilter() {
    filterBool = true;
    filterContent.style.display = "flex";
    showFilter.textContent = "HIDE FILTER";
    arrow.style.transform = 'rotate(360deg)';
}

function closeFilter() {
    filterBool = false;
    filterContent.style.display = "none";
    showFilter.textContent = "SHOW FILTER";
    arrow.style.transform = 'rotate(180deg)';
}

function clearFilter() {
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
}
//maintaining thickbox responsivity 
window.onresize = function () {

    //align buttons responsively
  
    //if width is min-width:850px and #person is open
    if (widthPerson.matches && personBool == true) {
        person.style.width = "55vw";

    }
    //else #person
    else if (personBool) {
        person.style.width = "80vw";
    }

    else if (widthAbout.matches && aboutBool) {
        about.style.width = "60vw";
    }

    else if (aboutBool) {
        about.style.width = "90vw";
    }
}