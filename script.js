let inpEL = document.querySelectorAll(".input");
let h2El = document.querySelectorAll(".showNum"); 
let h3El = document.querySelectorAll(".errorMsg"); 

inpEL[0].value = 1;


function addNum() {
    let value  = inpEL[0].value;
    displayMsg(value,"+");
}

function subtractNum() {
    let value  = inpEL[0].value;
    displayMsg(value,"-");
}

function clearForm() {
    inpEL[0].value = "";
    h2El[0].innerHTML = "";
}

function displayMsg(input,operator) {

     if(isNaN(input)) {
        console.error("you must enter a number");
        h3El[0].innerHTML = `
        You must enter a number
        `;

        h3El[0].style.borderWidth = "1px";
    }
     else if (operator === "+") {

        h2El[0].innerHTML = `
        ${Number(h2El[0].innerHTML) + Number(input)}
        `;
        removeErr();

    } else if (operator === "-") {

        h2El[0].innerHTML = `
        ${Number(h2El[0].innerHTML) - Number(input)}
        `;
        removeErr();


    }
    
}

function removeErr() {
    h3El[0].innerHTML = "";
    h3El[0].style.borderWidth = "0px";
}


// function printmsg() {
//     let msg  = inpEL[0].value;
//     if (!isNaN(msg)) {

//         console.log(msg);
//         h1El[0].innerHTML = `
//         ${Number(h1El[0].innerHTML) + Number(msg)}
//         `;
//         h3El[0].innerHTML = ``;
//         h3El[0].style.borderWidth = "0px";

//     }else {
//         console.error("you must enter a number");
//         h3El[0].innerHTML = `
//         You must enter a number
//         `;

//         h3El[0].style.borderWidth = "1px";
//     }
// }


// console.log(isNaN("abc"))


// function subtract() {
//     let num = inpEL[0].value;
//     if (!isNaN(num)) {

//         h1El[0].innerHTML = `
//         ${Number(h1El[0].innerHTML) - Number(num)}
//         `;
//         h3El[0].innerHTML = ``;
//         h3El[0].style.borderWidth = "0px";


//     }else {
//         h3El[0].innerHTML = `
//         You must enter a number
//         `;

//         h3El[0].style.borderWidth = "1px";
//     }
// }