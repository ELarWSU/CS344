"use strict";

function promptExample(){
    alert(prompt("Type something here: "));
}

function readName(){
    let form = document.getElementById("form1");
    let name = form.inputboxName.value;
    alert(name);
}

function readPasswd(){
    let form = document.getElementById("form1");
    let passwd = form.inputPassword.value;
    alert(passwd);
}

function readCheckbox(){
    let form = document.getElementById("form1");
    let result = document.getElementById("checkIn");
    let str = "Checked: ";

    // check four checkboxes one by one
    if(form.inCheckbox1.checked == true){
        str+= 'HTML ';
    }
    if(form.inCheckbox2.checked == true){
        str+= 'CSS ';
    }
    if(form.inCheckbox3.checked == true){
        str+= 'JavaScript ';
    }
    if(form.inCheckbox4.checked == true){
        str+= 'PHP';
    }

    result.innerHTML = str;
}

function readRadio(){
    let result = document.getElementById("radioIn");
}

