let buttonOpslaan1  = document.querySelector("#opslaan1");
let buttonOpslaan2  = document.querySelector("#opslaan2");
let buttonOpslaan3  = document.querySelector("#opslaan3");

let inputVanMeest1  = document.querySelector("#vanMeest1");
let inputNaarMeest1 = document.querySelector("#naarMeest1");

let inputVanMeest2  = document.querySelector("#vanMeest2");
let inputNaarMeest2 = document.querySelector("#naarMeest2");

let vanNieuwe       = document.querySelector("#vanNieuwe");
let naarNieuwe      = document.querySelector("#naarNieuwe");

let vandaagMenuItem = document.querySelector("#vandaagMenuItem");
let morgenMenuItem  = document.querySelector("#morgenMenuItem");
let andersMenuItem  = document.querySelector("#andersMenuItem");

let planner1  = document.querySelector("#planner1");
let planner2  = document.querySelector("#planner2");

let treinRitten     = document.querySelector(".treinenBox");

let show1     = document.querySelector(".show1");
let show2     = document.querySelector(".show2");


window.onload = function (e) {

    inputVanMeest1.focus();
  // buttonOpslaan2.focus

    // openMenu(event, 'Vandaag');
    document.getElementById("vandaagMenuItem").click();
}


// Meest recent VAN station
inputVanMeest1.addEventListener('keydown', function (vanmeest1) {

    // right arrow
    if (vanmeest1.shiftKey && vanmeest1.keyCode == 39) {

        inputNaarMeest1.focus();
        return false;

    }
})

// Meest recent NAAR station
inputNaarMeest1.addEventListener('keydown', function (naarmeest1) {

    // right arrow
    if (naarmeest1.shiftKey && naarmeest1.keyCode == 39) {

        planner1.focus();
        return false;

    } // left arrow
    else if (naarmeest1.shiftKey && naarmeest1.keyCode == 37) {

        inputVanMeest1.focus();
        return false;
    }
});

// PLANNER 1
planner1.addEventListener('keydown', function (planner1) {

    // right arrow
    if (planner1.shiftKey && planner1.keyCode == 39) {

        inputVanMeest2.focus();
        return false;

    } // left arrow
    else if (planner1.shiftKey && planner1.keyCode == 37) {

        inputNaarMeest1.focus();
        return false;
    }
});

// Meest recent VAN station
inputVanMeest2.addEventListener('keydown', function (vanmeest2) {

    // right arrow
    if (vanmeest2.shiftKey && vanmeest2.keyCode == 39) {

        inputNaarMeest2.focus();
        return false;

    } // left arrow
    else if (vanmeest2.shiftKey && vanmeest2.keyCode == 37) {

        planner1.focus();
        return false;
    }
});

// Meest recent NAAR station
inputNaarMeest2.addEventListener('keydown', function (naarmeest2) {

    // right arrow
    if (naarmeest2.shiftKey && naarmeest2.keyCode == 39) {

        planner2.focus();
        return false;

    } // left arrow
    else if (naarmeest2.shiftKey && naarmeest2.keyCode == 37) {

        inputVanMeest2.focus();
        return false;
    }
});

// PLANNER 2
planner2.addEventListener('keydown', function (planner2) {

    // right arrow
    if (planner2.shiftKey && planner2.keyCode == 39) {

        vanNieuwe.focus();
        return false;

    } // left arrow
    else if (planner2.shiftKey && planner2.keyCode == 37) {

        inputNaarMeest2.focus();
        return false;
    }
});

// VAN NIEUWE
vanNieuwe.addEventListener('keydown', function (vannieuwe) {

    // right arrow
    if (vannieuwe.shiftKey && vannieuwe.keyCode == 39) {

        naarNieuwe.focus();
        return false;

    } // left arrow
    else if (vannieuwe.shiftKey && vannieuwe.keyCode == 37) {

        planner2.focus();
        return false;
    }
});

// NAAR NIEUWE
naarNieuwe.addEventListener('keydown', function (naarnieuwe) {

    // right arrow
    if (naarnieuwe.shiftKey && naarnieuwe.keyCode == 39) {

        vandaagMenuItem.focus();
        return false;

    } // left arrow
    else if (naarnieuwe.shiftKey && naarnieuwe.keyCode == 37) {

        vanNieuwe.focus();
        return false;
    }
});

// VANDAAG
vandaagMenuItem.addEventListener('keydown', function (vandaag) {

    // right arrow
    if (vandaag.shiftKey && vandaag.keyCode == 39) {

        morgenMenuItem.focus();
        return false;

    } // left arrow
    else if (vandaag.shiftKey && vandaag.keyCode == 37) {

        naarNieuwe.focus();
        return false;
    }
});


// MORGEN
morgenMenuItem.addEventListener('keydown', function (morgen) {

    // right arrow
    if (morgen.shiftKey && morgen.keyCode == 39) {

        andersMenuItem.focus();
        return false;

    } // left arrow
    else if (morgen.shiftKey && morgen.keyCode == 37) {

        vandaagMenuItem.focus();
        return false;
    }
});


// ANDERS
andersMenuItem.addEventListener('keydown', function (anders) {

    // right arrow
    if (anders.shiftKey && anders.keyCode == 37) {

        morgenMenuItem.focus();
        return false;

    }
});


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
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

 // let steden = ["Almere","Amsterdam","Breda","Den Haag","Eindhoven","Groningen","Nijmegen","Rotterdam","Tilburg","Utrecht"];