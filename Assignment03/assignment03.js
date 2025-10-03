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


function calculate() {
    const inputValue = parseFloat(document.getElementById("input").value);
    const type = document.querySelector('input[name="type"]:checked').value;
    const fromUnit = document.getElementById("fromMeasurements").value;
    const toUnit = document.getElementById("toMeasurements").value;
    const result = document.getElementById("outputHeader");
    
    if (isNaN(inputValue) || inputValue < 0) {
        result.textContent = "Error: Please enter a number greater than 0";
        return;
    } else if (type == 'len') {
        calcLen(fromUnit, toUnit, inputValue, result);
    } else if (type == 'weight') {
        calcWeight(fromUnit, toUnit, inputValue, result);
    } else if( type == 'area'){
        calcArea(fromUnit, toUnit, inputValue, result);
    } else if( type == 'vol'){
        calcVol(fromUnit, toUnit, inputValue, result);
    } else if( type == 'temp'){
        calcTemp(fromUnit, toUnit, inputValue, result);
    } else {
        result.textContent = "Error: Unknown conversion type";
    }
}

function calcLen(from, to, input, result) {
    const lengthToMeters = {
        inches: 0.0254,
        feet: 0.3048,
        centimeters: 0.01,
        meters: 1
    };

    const toMeters = input * lengthToMeters[from];
    const finalNum = toMeters / lengthToMeters[to];

    result.textContent = `${input} ${from} = ${roundUp(finalNum)} ${to}`;
}

function calcWeight(from, to, input, result) {
    const weightToGrams = {
        grams: 1,
        kilograms: 1000,
        pounds: 453.592,
        ounces: 28.3495
    };

    const toGrams = input * weightToGrams[from];
    const finalNum = toGrams / weightToGrams[to];

    result.textContent = `${input} ${from} = ${roundUp(finalNum)} ${to}`;
}

function calcArea(from, to, input, result) {
    const areaToSqMeters = {
        "sq meters": 1,
        "sq feet": 0.092903,
        "acres": 4046.86,        
        "sq kilometers": 1000000 
    };

    const toSqMeters = input * areaToSqMeters[from];
    const finalNum = toSqMeters / areaToSqMeters[to];

    result.textContent = `${input} ${from} = ${roundUp(finalNum)} ${to}`;
}

function calcVol(from, to, input, result){
    const volToLiters = {liters: 1, milliliters: 0.001, gallons: 3.78541, cups: 0.24};
    const toLiters = input * volToLiters[from];
    const finalNum = toLiters / volToLiters[to];

    result.textContent = `${input} ${from} = ${roundUp(finalNum)} ${to}`;
}

function calcTemp(from, to, input, result){
    let valueInCelsius;

    if (from == "celsius") {
        valueInCelsius = input;
    } else if (from == "fahrenheit") {
        valueInCelsius = (input - 32) * 5/9;
    } else if (from == "kelvin") {
        valueInCelsius = input - 273.15;
    }

    let finalNum;
    if (to == "celsius") {
        finalNum = valueInCelsius;
    } else if (to == "fahrenheit") {
        finalNum = (valueInCelsius * 9/5) + 32;
    } else if (to == "kelvin") {
        finalNum = valueInCelsius + 273.15;
    }

    result.textContent = `${input} ${from} = ${roundUp(finalNum)} ${to}`;
}

function roundUp(num) {
    return Math.ceil(num * 10000) / 10000;
}