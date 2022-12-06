"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var input = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, './input.txt'), 'utf-8');
var output = input.split("");
var letters = ['A', 'B', 'C', 'X', 'Y', 'Z'];
var sequence = output.filter(function (letter) { return letters.includes(letter); });
var score = 0;
for (var i = 0; i < sequence.length; i++) {
    console.log(i);
    if (sequence[i] === "A") {
        if (sequence[i + 1] === "X") {
            console.log("TIE");
            score = score + 3 + 1;
        }
        if (sequence[i + 1] === "Y") {
            console.log("WIN");
            score = score + 6 + 2;
        }
        if (sequence[i + 1] === "Z") {
            console.log("LOSE");
            score = score + 0 + 3;
        }
    }
    if (sequence[i] === "B") {
        if (sequence[i + 1] === "X") {
            console.log("LOSE");
            score = score + 0 + 1;
        }
        if (sequence[i + 1] === "Y") {
            console.log("TIE");
            score = score + 3 + 2;
        }
        if (sequence[i + 1] === "Z") {
            console.log("WIN");
            score = score + 6 + 3;
        }
    }
    if (sequence[i] === "C") {
        if (sequence[i + 1] === "X") {
            console.log("WIN");
            score = score + 6 + 1;
        }
        if (sequence[i + 1] === "Y") {
            console.log("LOSE");
            score = score + 0 + 2;
        }
        if (sequence[i + 1] === "Z") {
            console.log("TIE");
            score = score + 3 + 3;
        }
    }
}
console.log(score);
2 + 3;
6 + 2;
6 + 3;
0 + 3;
/**
 * B Y
A Y
B Z
A Z
 *
 * not right 1310 to low
 *
 * Rock Paper Scissors
 *
 * A,X Rock
 * B,Y Paper
 * C,Z Scissors
 *
 * X->C,Z  X Win
 *
 * Y->A,X  Y Win
 *
 * Z->B,Y  Z Win
 *
 * X -> 1 Point
 * Y -> 2 Points
 * Z -> 3 Points
 *
 * Win -> 6
 * Tie -> 3
 * Lose-> 0
 *
 *
 */
