const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const inscriptionBtn = document.getElementById("inscriptionBtn");

confirmPassword.addEventListener("change", () => {

    if (password.value != confirmPassword.value) {
        confirmPassword.style.backgroundColor = "red";
        inscriptionBtn.setAttribute("disabled", "true");
    } else {
        confirmPassword.style.backgroundColor = "white";
        inscriptionBtn.removeAttribute("disabled");
    }

});