let buttonOpslaan1  = document.querySelector("#opslaan1");
let buttonOpslaan2  = document.querySelector("#opslaan2");
let buttonOpslaan3  = document.querySelector("#opslaan3");

let vandaagMenuItem = document.querySelector("#vandaagMenuItem");
let morgenMenuItem  = document.querySelector("#morgenMenuItem");
let andersMenuItem  = document.querySelector("#andersMenuItem");

let treinRitten     = document.querySelector(".treinenBox");

window.onload = function (e) {

  // buttonOpslaan2.focus

    // openMenu(event, 'Vandaag');
    document.getElementById("vandaagMenuItem").click();
}


buttonOpslaan1.addEventListener("click", function (event) {
    event.preventDefault();

    showTreinRitten();
});

buttonOpslaan2.addEventListener("click", function (event) {
    event.preventDefault();

    showTreinRitten();
});

buttonOpslaan3.addEventListener("click", function (event) {
    event.preventDefault();

    showTreinRitten();
});

function openMenu(evt, cityName) {

  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  hideTreinRitten();

}

function showTreinRitten() {
    treinRitten.style.display = "block";
}

function hideTreinRitten() {
    treinRitten.style.display = "none";
}

function showRiddleAnswer() {

}

let showAnswer      = document.querySelector("#showAnswer");
let riddleAnswers   = document.querySelector("#riddleAnswers");

showAnswer.addEventListener("click", function (event) {
    event.preventDefault();
    riddleAnswers.style.display = "block";
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}