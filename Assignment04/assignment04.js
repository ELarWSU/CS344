"use strict";

function dayTask(intDay, strDay) {

    let strMessage = prompt("Enter your task for " + strDay);
    
    //You have entered nothing, exit
    if (strMessage === "") {
        alert("You have entered an empty string. Please enter a valid task.");
        return;
    }

    let intCount = 1;
    let htmlTable = document.querySelector("table");
    //Loops through rows of the table
    while (true) {
        let tableRow = htmlTable.rows[intCount];
        //If row doesn't exist, populate a new row and try again.
        if (tableRow == null) {
            populateRow(htmlTable);
            continue;
        }

        let strCell = tableRow.cells[intDay - 1].textContent;
        //If cell is empty, populate with message and exit
        if (strCell === "") {
            tableRow.cells[intDay - 1].textContent = strMessage;
            return;
        }

        //Row has content, check next row.
        intCount += 1;
    }
}

// Adds a row to the given table and adds 7 cells to the row
function populateRow(table) {
    let newRow = table.insertRow();

    for (let i = 0; i < 7; i++) {
        newRow.insertCell().textContent = "";
    }
}

