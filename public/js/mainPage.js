var logoBougVertical = document.getElementById("logoBougVertical");
var mainNewsTitle = document.getElementById("mainNewsTitle");
var mainNewsImg = document.getElementById("mainNewsImg");
var trigHover = document.getElementById("trigHov");

let logoBougVerticalStyle = logoBougVertical.style;
let mainNewsTitleStyle = mainNewsTitle.style;
let mainNewsImgStyle = mainNewsImg.style;

trigHover.addEventListener("mouseenter", () => {

    mainNewsTitle.style.borderBottom = "solid 10px white";
    mainNewsTitle.style.fontSize = "520%"
    //logoBougVertical.style.transform = "scale(0.87)";
    logoBougVertical.style.filter = "blur(3px)";
    mainNewsImg.style.transform = "scale(1.0)";
    mainNewsImg.style.filter = "blur(5px)";

});

trigHover.addEventListener("mouseleave", () => {

    logoBougVertical.style = logoBougVerticalStyle;
    mainNewsTitle.style = mainNewsTitleStyle;
    mainNewsImg.style = mainNewsImgStyle;

});


var imgFragRight = document.getElementById("imgFragRight");
var imgLogoFrag = document.getElementById("imgLogoFrag");
var titleFragMainRight = document.getElementById("titleFragMainRight");
var trigHover1 = document.getElementById("trigHov1");

var imgFragLeft = document.getElementById("imgFragLeft");
var imgLogoFrag1 = document.getElementById("imgLogoFrag1");
var titleFragMainLeft = document.getElementById("titleFragMainLeft");
var trigHover2 = document.getElementById("trigHov2");

let imgFragRightStyle = imgFragRight.style;
let imgLogoFragStyle = imgLogoFrag.style;
let titleFragMainRightStyle = titleFragMainRight.style;

let imgFragLeftStyle = imgFragLeft.style;
let imgLogoFrag1Style = imgLogoFrag1.style;
let titleFragMainLeftStyle = titleFragMainLeft.style;

trigHover2.addEventListener("mouseenter", () => {

    titleFragMainRight.style.fontSize = "400%"
    //imgLogoFrag.style.transform = "scale(0.87)";
    imgLogoFrag.style.filter = "blur(3px)";
    imgFragRight.style.transform = "scale(1.0)";
    imgFragRight.style.filter = "blur(5px)";

});

trigHover2.addEventListener("mouseleave", () => {

    imgFragRight.style = imgFragRightStyle;
    imgLogoFrag.style = imgLogoFragStyle;
    titleFragMainRight.style = titleFragMainRightStyle;

});

trigHover1.addEventListener("mouseenter", () => {

    titleFragMainLeft.style.fontSize = "400%"
    imgLogoFrag1.style.filter = "blur(3px)";
    imgFragLeft.style.transform = "scale(1.0)";
    imgFragLeft.style.filter = "blur(5px)";

});

trigHover1.addEventListener("mouseleave", () => {

    imgFragLeft.style = imgFragLeftStyle;
    imgLogoFrag1.style = imgLogoFrag1Style;
    titleFragMainLeft.style = titleFragMainLeftStyle;

});

var trigSideNav = document.getElementById("trigSideNav");
var sideNav = document.getElementById("sideNav");
var mainMenu = document.getElementById("mainMenu");
var trigger = true;



trigSideNav.addEventListener("click", () => {
    if (trigger) { 
        sideNav.style.width = "300px";
        mainMenu.style.display = "none";
        trigger = false;
    } else {sideNav.style.width = "0px";
            mainMenu.style.display = "flex";
            trigger = true;
            }

});

document.body.addEventListener("mouseup", () => {
    if (trigger == false) {
        sideNav.style.width = "0px";
        mainMenu.style.display = "flex";
        // trigger = true;
    }
});


/* ------- Submenu ------- */

// var trigBougPlus = document.getElementById("bougPlus");
// var fragMenu = document.getElementById("fragSM");
// var subMenu = document.getElementsByClassName("subMenu");

// trigBougPlus.addEventListener("mouseover", () => {

//         subMenu[0].style.display = "block";

// });

// fragMenu.addEventListener("mouseover", () => {

//         subMenu[1].style.display = "block";

// });

// trigBougPlus.addEventListener("mouseleave", () => {

//         subMenu[0].style.display = "none";

// });

// fragMenu.addEventListener("mouseleave", () => {

//         subMenu[1].style.display = "none";

// });