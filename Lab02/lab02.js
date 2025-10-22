"use strict";

//Global variables
let boardX = 7;
let boardY = 7;
let winLength = 4;
let tableElem = document.getElementById("board");
let xWinCount = 0;
let yWinCount = 0;
let moveCount = 0;

let t = "X";
let clicked = false;
let settled = false;
let b = document.getElementsByTagName("td");

//2d array for board
let board = [];

//Made by Shimin Li, hightlight function
function hightlight(e) {
    if (e.target.innerHTML === "") {
        e.target.innerHTML = t;
        settled = false;
    } else {
        settled = true;
    }
}

//Made by Shimin Li, back function
function back(e) {
    if (!settled && !clicked) {
        e.target.innerHTML = "";
    }
    clicked = false;
    settled = false;
}


//Made by Shimin Li, draw function
function draw(e) {
    clicked = true;
    if (!settled) {
        e.target.innerHTML = t;
        let coords = e.target.id.split(" ");
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);
        board[x][y] = t;

        //Check win after we draw
        checkWin();
        checkDraw();

        if (t === "X") {
            t = "O";
        } else {
            t = "X";
        }
        settled = true;
    }
}

// Builds the board
function drawBoard() {
    // Empties the board html elements and 2d array
    tableElem.innerHTML = "";
    board = [];
    //Resets game variables
    clicked = false;
    settled = false;
    t = "X";


    //Draw board by adding a new row x amount of times
    for (let i = 0; i < boardX; i++) {
        tableElem.insertRow();
        board[i] = [];
        //Draw cells by adding a new cell y amount of times (col height)
        for (let j = 0; j < boardY; j++) {
            let square = tableElem.rows[i].insertCell();
            square.id = '' + i + ' ' + j; //Adds id to html elem to identify coords
            board[i][j] = "";
            square.addEventListener("mouseenter", hightlight);
            square.addEventListener("mouseleave", back);
            square.addEventListener("click", draw);
        }
    }
}

//Check for a w in by iterating through all the cells
function checkWin() {
    //iterates through rows
    for (let i = 0; i < boardX; i++) {
        //iterates through columns/cells
        for (let j = 0; j < boardY; j++) {
            //if empty, skip
            if (board[i][j] === "") {
                continue;
            } //Check for win conditions
            else if(checkHorizontal(i, j, board[i][j]) || checkVertical(i, j, board[i][j])) {
                winGame(board[i][j]);
                return;
            }
        }
    }
}

//Checks to see if there are 4 continous marks in the same row
function checkHorizontal(x, y, val) {
    if (x + winLength > boardX) {
        return false;
    }

    for (let i = x; i < x + winLength; i++) {
        if (board[i][y] !== val) {
            return false;
        }
    }

    return true;
}

//Checks to see if there are 4 continous marks in the same column
function checkVertical(x, y, val) {
    if (y + winLength > boardY) {
        return false;
    }

    for (let i = y; i < y + winLength; i++) {
        if (board[x][i] !== val) {
            return false;
        }
    }

    return true;
}

//What to do when we win the game
function winGame(strWinner){
    moveCount = 0;
    alert(strWinner + " wins!");
    if (strWinner === "X") {
        xWinCount += 1;
        document.getElementById("xWinCount").innerText = xWinCount;
    } else {
        yWinCount += 1;
        document.getElementById("yWinCount").innerText = yWinCount;
    }
    drawBoard();
}

//Checks to see if draw, if so
function checkDraw(){
    moveCount += 1;
    if (moveCount === boardX * boardY){
        moveCount = 0;
        alert("It's a draw!");
        drawBoard();
    }
}

//Starts by drawing the board
drawBoard();