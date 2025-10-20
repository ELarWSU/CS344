"use strict";

function dayTask(intDay, strDay) {
    //Input prompt
    const promptMessage = prompt("Enter your task for " + strDay);
    
    //You have entered nothing, exit
    if (promptMessage === "") {
        alert("You have entered an empty string. Please enter a valid task.");
        return;
    }

    let intCount = 1;
    const htmlTable = document.querySelector("table");
    //Loops through rows of the table
    while (true) {
        const tableRow = htmlTable.rows[intCount];
        //If row doesn't exist, populate a new row and try again.
        if (tableRow == null) {
            populateRow(htmlTable);
            continue;
        }

        const strCell = tableRow.cells[intDay - 1].textContent;
        //If cell is empty, populate with message and exit
        if (strCell === "") {
            tableRow.cells[intDay - 1].textContent = promptMessage;
            return;
        }

        //Row has content, check next row.
        intCount += 1;
    }
}

// Adds a row to the given table and adds 7 cells to the row
function populateRow(table) {
    const newRow = table.insertRow();

    // Add 7 empty cells to the new row
    for (let i = 0; i < 7; i++) {
        newRow.insertCell().textContent = ""; // Corrected 'textContent'
    }
}