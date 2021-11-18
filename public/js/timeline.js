var container1 = document.getElementById("containerOne");
var container2 = document.getElementById("containerTwo");
var container3 = document.getElementById("containerThree");
var container4 = document.getElementById("containerFour");
var dropZone = document.getElementsByClassName("dropBox");
var fragments = document.getElementsByClassName("fragTL");

function allowDrop(ev) {
  for (let i = 0; i < dropZone.length; i++) {
    if (dropZone[i].hasChildNodes()) {
        ev.preventDefault();
        dropZone[i].removeAttribute("ondragover");
    } else {
        ev.preventDefault();
        dropZone[i].setAttribute("ondragover", "allowDrop(event)");
        }
    }
  }

function dragEnter(ev) {
  for (let i = 0; i < dropZone.length; i++) {
    if (dropZone[i].hasChildNodes()) {
      console.log(ev.target.hasChildNodes);
        ev.preventDefault();
        dropZone[i].removeAttribute("ondragover");
        dropZone[i].removeAttribute("ondrop");
    } else {
        ev.preventDefault();
        dropZone[i].setAttribute("ondragover", "allowDrop(event)");
        dropZone[i].setAttribute("ondrop", "drop(event)"); // Test add un classname bidon et si le classname interdit le hover
    }
  }
}
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  