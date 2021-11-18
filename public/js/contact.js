var auteur = document.getElementById("EdPaill");
var art = document.getElementById("AntPetit");
var son = document.getElementById("JulesLucc");
var table = document.getElementsByClassName("tableContact");
var email = document.getElementsByClassName("mailContact");

auteur.addEventListener("click", () => {

    table[0].style.display = "block";
    email[0].style.display = "block";
    table[1].style.display = "none";
    email[1].style.display = "none";
    table[2].style.display = "none";
    email[2].style.display = "none";
});

art.addEventListener("click", () => {

    table[0].style.display = "none";
    email[0].style.display = "none";
    table[1].style.display = "block";
    email[1].style.display = "block";
    table[2].style.display = "none";
    email[2].style.display = "none";
});

son.addEventListener("click", () => {

    table[0].style.display = "none";
    email[0].style.display = "none";
    table[1].style.display = "none";
    email[1].style.display = "none";
    table[2].style.display = "block";
    email[2].style.display = "block";
});