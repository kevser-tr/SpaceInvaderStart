"use strict";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
drawSpaceInvader();

function drawSpaceInvader() {
    context.beginPath();
    context.rect(25, 200, 250, 100);
    context.rect(75, 50, 50, 150);
    context.rect(175, 50, 50, 150);
    context.rect(25, 100, 50, 50);
    context.rect(225, 100, 50, 50);
    context.fillStyle = "#66ff00";
    context.fill();
}