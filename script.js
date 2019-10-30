let container = document.getElementById("container");
const mq = window.matchMedia("(min-width: 850px)");
var filterBool = true;
var aboutBool = false;
var personBool = false;



addClass("about");
addClass("person");

function addClass(classs){
    let classElements = document.getElementById(classs).querySelectorAll("*")
    console.log(classElements);
    for (var i = 0; i < classElements.length; i++) {
        classElements[i].classList.add(classs);
    }
}



document.addEventListener("click", function (e) {
    console.log(e.target);

    if (filterBool == true && (e.target.id == "arrow" || e.target.id == "show")) {
        closeFilter();
    }
    else if (filterBool == false && (e.target.id && "arrow" || e.target.id == "show")) {
        openFilter();
    }
    else if (aboutBool == true && (e.target.className != "about")) {
        closeAbout();
    }

    else if (aboutBool == false && e.target.id == "aboutButton") {
        openAbout();
    }
    else if (personBool == true && (e.target.className != "person")) {
        closePerson();
        console.log(e);
    }

    else if (personBool == false && e.target.className == "person-photo") {
        openPerson();
    }


})

function openAbout() {
    aboutBool = true;
    document.getElementById("about").style.padding = "3em";
    document.getElementById("all").style.display = "block";
    document.getElementById("closebtn").style.display = "block";
    disableScroll();

    if (mq.matches) {
        document.getElementById("about").style.width = "70vw";
    }
    else if (!mq.matches) {
        document.getElementById("about").style.width = "90vw";
    }

}

function closeAbout() {
    aboutBool = false;
    document.getElementById("about").style.width = "0";
    document.getElementById("about").style.padding = "0";
    document.getElementById("all").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    allowScroll();
}

function openPerson() {
    personBool = true;

    document.getElementById("person").style.padding = "2em";
    document.getElementById("all").style.display = "block";
    document.getElementById("right-button").style.display = "block";
    document.getElementById("left-button").style.display = "block";
    disableScroll();

    document.getElementById("button-void").style.display = "block";

    if (mq.matches) {
        document.getElementById("person").style.width = "55vw";
    }
    else if (!mq.matches) {
        document.getElementById("person").style.width = "90vw";
    }

    document.getElementById("button-void").style.height = document.getElementById("person").offsetHeight + "px";

}

function closePerson() {
    personBool = false;
    document.getElementById("person").style.width = "0";
    document.getElementById("person").style.padding = "0";
    document.getElementById("all").style.display = "none";
    document.getElementById("right-button").style.display = "none";
    document.getElementById("left-button").style.display = "none";
    document.getElementById("button-void").style.display = "none";
    allowScroll()
}

function disableScroll() {
    container.style.position = "fixed";
    container.style.overflow = "hidden";
}

function allowScroll() {
    container.style.position = "relative";
    container.style.overflow = "scroll";
}

function closeFilter() {
    filterBool = false;
    document.getElementById("filter-content").style.display = "none";
    document.getElementById("show").textContent = "SHOW FILTER";
    document.getElementById("arrow").style.transform = 'rotate(180deg)';
}
function openFilter() {
    filterBool = true;
    document.getElementById("filter-content").style.display = "flex";
    document.getElementById("show").textContent = "HIDE FILTER";
    document.getElementById("arrow").style.transform = 'rotate(360deg)';
}

function clearFilter() {
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
}
//maintaining thickbox responsivity 
window.onresize = function () {

    //align buttons responsively
    if (personBool) {
        document.getElementById("button-void").style.height = document.getElementById("person").offsetHeight + "px";
    }

    //if width is min-width:850px and #person is open
    if (mq.matches && personBool == true) {
        document.getElementById("person").style.width = "55vw";

    }
    //else #person
    else if (personBool) {
        document.getElementById("person").style.width = "90vw";
    }

    else if (mq.matches && aboutBool) {
        document.getElementById("about").style.left = "20vw";
        document.getElementById("about").style.width = "60vw";
    }

    else if (aboutBool) {
        document.getElementById("about").style.left = "5vw";
        document.getElementById("about").style.width = "90vw";
    }
}