"use strict";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawDiagonal(){
    ctx.moveTo(0,0);
    ctx.lineTo(500,100);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rbg(200,10, 10)";
    ctx.stroke();
}

function drawCircle(){
    ctx.beginPath();
    // firefox's website to learn more about canvas (search canvas api mozilla)
    ctx.arc(200, 150, 100, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawSmile(){
    ctx.beginPath();
    ctx.arc(275, 200, 100, 0, Math.PI * 2, true);
    ctx.moveTo(345, 200);
    ctx.arc(275, 200, 70, 0, Math.PI, false);
    ctx.moveTo(255, 170);
    ctx.arc(240, 170, 15, 0, Math.PI * 2, true);
    ctx.moveTo(320, 130);
    ctx.arc(305, 170, 15, 0, Math.PI * 2, true);
    ctx.stroke();
}

function plotSineWave(){
    let x;
    let y;
     ctx.moveTo(50,200);
     ctx.lineTo(550, 200);
      ctx.moveto(300, 50);
      ctx.lineTo(300, 350);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(10, 10, 200)";
      ctx.moveTo(300, 200);
      for(let i = 0; i < 200; i++){
        x = i * Math.PI / 200;
        y = 100*Math.sin(x);
        ctx.lineTo(i+300, 200-y);
      }
      ctx.stroke();
}

function plotGraph(f){
     let x;
    let y;
     ctx.moveTo(50,200);
     ctx.lineTo(550, 200);
      ctx.moveto(300, 50);
      ctx.lineTo(300, 350);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(10, 10, 200)";
      ctx.moveTo(300, 200);
      for(let i = 0; i < 200; i++){
        x = i * Math.PI / 200;
        y = 100*f(x);
        ctx.lineTo(i+300, 200-y);
      }
      ctx.stroke();
      
      ctx.moveTo(300, 200);
      for(let i = 0; i >- 200; i--){
        x = i * Math.PI / 200;
        y = 100*f(x);
        ctx.lineTo(i+300, 200-y);
      }
    ctx.stroke();
}


function cube(x){
    return x * x * x;
}

// Self invoke function
plotGraph(cube);

// Anonymous function
plotGraph(function(x){
    return x * x * x;
});