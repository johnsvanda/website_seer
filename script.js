let container = document.getElementById("container");

var sidebar = false;
var aboutBool = false;
var personBool = false;

var filter = document.getElementById("filter-sidebar");
var filterAll = filter.querySelectorAll("*");
for (var i = 0; i < filterAll.length; i++) {
    filterAll[i].classList.add("filter");
}

var about = document.getElementById("about");
var aboutAll = about.querySelectorAll("*");
for (var i = 0; i < aboutAll.length; i++) {
    aboutAll[i].classList.add("about");
}

var person = document.getElementById("person");
var personAll = person.querySelectorAll("*");
for (var i = 0; i < personAll.length; i++) {
    personAll[i].classList.add("person");
}

document.addEventListener("click", function (e) {
    console.log(e);
    if (sidebar == true && (e.target.className != "filter")) {
        console.log(e);
        closeSidebar();
    }
    else if (sidebar == false && (e.target.id == "open-filter" || e.target.id == "arrow" || e.target.id == "show-hide-filter")) {
        openSidebar();
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

    else if (personBool == false && e.target.className == "profile-photo") {
        openPerson();
    }


})

function openSidebar() {
    sidebar = true;
    document.getElementById("filter-sidebar").style.width = "80vw";
    document.getElementById("filter-sidebar").style.padding = "10px";
    document.getElementById("show-hide-filter").textContent = "HIDE FILTER";
    document.getElementById("arrow").setAttribute('style', 'transform:rotate(180deg)');
    document.getElementById("all").style.display = "block";
    disableScroll();
}

function closeSidebar() {
    sidebar = false;
    document.getElementById("filter-sidebar").style.width = "0";
    document.getElementById("filter-sidebar").style.padding = "0";
    document.getElementById("show-hide-filter").textContent = "SHOW FILTER";
    document.getElementById("arrow").setAttribute('style', 'transform:rotate(0deg)');
    document.getElementById("all").style.display = "none";
    allowScroll();
}

function openAbout() {
    aboutBool = true;
    document.getElementById("about").style.width = "60vw";
    document.getElementById("about").style.padding = "2em";
    document.getElementById("all").style.display = "block";
    disableScroll();

}

function closeAbout() {
    aboutBool = false;
    document.getElementById("about").style.width = "0";
    document.getElementById("about").style.padding = "0";
    document.getElementById("all").style.display = "none";
    allowScroll();
}

function openPerson() {
    personBool = true;

    const mq = window.matchMedia("(min-width: 850px)");

    if (mq.matches) {
        document.getElementById("person").style.width = "55vw";
    } else {
        document.getElementById("person").style.width = "90vw";
    }

    window.onresize = function () {
        if (mq.matches && document.getElementById("person").style.padding == "2em") {
            document.getElementById("person").style.width = "55vw";
        }
        else if(document.getElementById("person").style.padding == "2em"){
            document.getElementById("person").style.width = "90vw";
        }
    }

    document.getElementById("person").style.padding = "2em";
    document.getElementById("all").style.display = "block";
    document.getElementById("right-button").style.display = "block";
    document.getElementById("left-button").style.display = "block";
    disableScroll();
}

function closePerson() {
    personBool = false;
    document.getElementById("person").style.width = "0";
    document.getElementById("person").style.padding = "0";
    document.getElementById("all").style.display = "none";
    document.getElementById("right-button").style.display = "none";
    document.getElementById("left-button").style.display = "none";
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