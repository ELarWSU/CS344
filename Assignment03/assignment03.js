"use strict";

// Define options for each type
const options = {
    len: ["inches", "feet", "centimeters", "meters"],
    weight: ["grams", "kilograms", "pounds", "ounces"],
    area: ["sq meters", "sq feet", "acres", "sq kilometers"],
    vol: ["liters", "milliliters", "gallons", "cups"],
    temp: ["celsius", "fahrenheit", "kelvin"]
};

function populateDropdowns(type) {
    const fromSelect = document.getElementById("fromMeasurements");
    const toSelect = document.getElementById("toMeasurements");

    // Clear out old options
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    // Get the list of options for this type
    const list = options[type];

    // Use a regular for loop to go through each option
    for (let i = 0; i < list.length; i++) {
        const opt = list[i];

        // Create option for "from" and "to"d dropdown
        const optionElem1 = document.createElement("option");
        optionElem1.value = opt;
        optionElem1.textContent = opt;
        fromSelect.appendChild(optionElem1);
        toSelect.appendChild(optionElem1.cloneNode(true));
    }
}

function calculate(){
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromMeasurements").value;
    const toUnit = document.getElementById("toMeasurements").value;
    const type = document.getElementById("typeSelect").value;
    let outputValue;

    if (inputValue < 0 || inputValue === null || typeof inputValue != "number") {
        alert("Please enter a valid number.");
        return;
    }
    else{
        alert("Input accepted");
        return;
    }
}