let datumElement = document.querySelector("#datumVandaag");
let body = document.querySelector("body");
let dag, maand, jaar, uren, minuten = "";
let wMaanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];

let buttonVandaag   = document.querySelector("#vandaag");
let buttonMorgen    = document.querySelector("#morgen");
let selectDagen     = document.querySelector("#dagen");
let selectMaanden   = document.querySelector("#maanden");
let selectTijden    = document.querySelector("#tijd");
let buttonOpslaan   = document.querySelector("#opslaan");
let succesBericht   = document.querySelector("#bericht");
// let optie2uur       = document.querySelector("#2uur");

// show today's date
datumElement.innerHTML = getDayMonthYear();
window.onload = function (e) {

    buttonVandaag.focus();

}

// optie2uur.addEventListener("select", function (event) {
//    alert("ja man optie 2");
// });


body.addEventListener("keydown", function (pressed) {
    // alert("dit: " + pressed.key);
    // if (pressed.key == "h"){
    //
    //     buttonVandaag.focus();
    // } else if (pressed.key == "j"){
    //
    //     buttonMorgen.focus();
    // } else if (pressed.key == "k"){
    //
    //     selectDagen.focus();
    // } else if (pressed.key == "l"){
    //
    //     selectMaanden.focus();
    // } else if (pressed.key == ";"){
    //
    //     selectTijden.focus();
    // } else if (pressed.key == "'"){
    //
    //     buttonOpslaan.focus();
    // }

});

selectTijden.addEventListener("input", function (event) {

    if(event.target.value == "2"){
        addDaysHours(1,2);
    }
});


buttonVandaag.addEventListener("focus", function (event) {
    event.preventDefault();
    buttonVandaag.style.backgroundColor = "black";
    buttonVandaag.style.color           = "white";
    datumElement.innerHTML = getDayMonthYear();
});

buttonVandaag.addEventListener("click", function (event) {
    event.preventDefault();
    buttonVandaag.style.backgroundColor = "black";
    buttonVandaag.style.color           = "white";
    datumElement.innerHTML = getDayMonthYear();
});

buttonVandaag.addEventListener("blur", function (event) {
    buttonVandaag.style.backgroundColor = "white";
    buttonVandaag.style.color           = "black";
});

buttonMorgen.addEventListener("focus", function (event) {
    event.preventDefault();
    buttonMorgen.style.backgroundColor = "black";
    buttonMorgen.style.color           = "white";

    // getDayMonthYear(1);j
    addDaysHours(1,1);
});

buttonMorgen.addEventListener("click", function (event) {
    event.preventDefault();
    buttonMorgen.style.backgroundColor = "black";
    buttonMorgen.style.color           = "white";

    // getDayMonthYear(1);j
    addDaysHours(1,1);
});

buttonMorgen.addEventListener("blur", function (event) {
    buttonMorgen.style.backgroundColor = "white";
    buttonMorgen.style.color           = "black";
});

buttonOpslaan.addEventListener("click", function (event) {
    event.preventDefault();
    succesBericht.innerHTML = "Done!";
});



function getDayMonthYear() {

    let datum = new Date();

    dag     = datum.getDate();
    maand   = wMaanden[datum.getMonth()];
    jaar    = datum.getFullYear();

    uren    = datum.getHours() + 1;
    minuten = datum.getMinutes();


    return `${dag} ${maand} ${jaar} - ${uren}:${minuten} uur`;

}

function addDaysHours(d,h) {

    let datum = new Date();

    let dag     = datum.getDate() + d;
    maand   = wMaanden[datum.getMonth()];
    jaar    = datum.getFullYear();

    uren    = datum.getHours() + h;
    minuten = datum.getMinutes();


    datumElement.innerHTML = `${dag} ${maand} ${jaar} - ${uren}:${minuten} uur`;

}

// function addHours(h) {
//
//     let datum = new Date();
//
//     let dag     = datum.getDate();
//     maand   = wMaanden[datum.getMonth()];
//     jaar    = datum.getFullYear();
//
//     uren    = datum.getHours();
//     minuten = datum.getMinutes();
//
//
//     datumElement.innerHTML = `${dag} ${maand} ${jaar} - ${uren}:${minuten} uur`;
//
// }