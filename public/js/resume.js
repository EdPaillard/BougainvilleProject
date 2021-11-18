var auteur = document.getElementById("auteurSection");
var art = document.getElementById("artSection");
var son = document.getElementById("sonSection");
var team = document.getElementsByClassName("teamProject");
var resume = document.getElementsByClassName("teamProjectResume");

auteur.addEventListener("click", () => {

    team[0].style.display = "flex";
    resume[0].style.display = "flex";

    team[1].style.display = "none";
    resume[1].style.display = "none";

    team[2].style.display = "none";
    resume[2].style.display = "none";

});

art.addEventListener("click", () => {

    team[0].style.display = "none";
    resume[0].style.display = "none";

    team[1].style.display = "flex";
    resume[1].style.display = "flex";

    team[2].style.display = "none";
    resume[2].style.display = "none";

});

son.addEventListener("click", () => {

    team[0].style.display = "none";
    resume[0].style.display = "none";

    team[1].style.display = "none";
    resume[1].style.display = "none";

    team[2].style.display = "flex";
    resume[2].style.display = "flex";

});