let buttonOpslaan1  = document.querySelector("#opslaan1");
let buttonOpslaan2  = document.querySelector("#opslaan2");
let buttonOpslaan3  = document.querySelector("#opslaan3");

let vandaagMenuItem = document.querySelector("#vandaagMenuItem");
let morgenMenuItem  = document.querySelector("#morgenMenuItem");
let andersMenuItem  = document.querySelector("#andersMenuItem");

let planner1  = document.querySelector("#planner1");
let planner2  = document.querySelector("#planner2");

let treinRitten     = document.querySelector(".treinenBox");

let show1     = document.querySelector(".show1");
let show2     = document.querySelector(".show2");


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


planner1.addEventListener("click", function (event) {
    event.preventDefault();

    showTreinRittenVaak1();
});

planner2.addEventListener("click", function (event) {
    event.preventDefault();

    showTreinRittenVaak2()
});

planner1.addEventListener("blur", function (event) {
    event.preventDefault();

    hideTreinRittenVaak1();
});

planner2.addEventListener("blur", function (event) {
    event.preventDefault();

    hideTreinRittenVaak2();
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

function showTreinRittenVaak1() {
    show1.style.display = "block";
}

function hideTreinRittenVaak1() {
    show1.style.display = "none";
}

function showTreinRittenVaak2() {
    show2.style.display = "block";
}

function hideTreinRittenVaak2() {
    show2.style.display = "none";
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