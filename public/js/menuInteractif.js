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