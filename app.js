"use strict";

let calculation="";

function addToEv() {
    let bns = document.getElementsByTagName("button");
    for (let i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
            let data = this.getAttribute("data-id");
            calculate(data);
        });
    }
}

function calculate(data) {
    calculation += data;
    console.log(data);
    console.log("calculation " + calculation);
}

addToEv();
