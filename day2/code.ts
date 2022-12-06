import { readFileSync } from 'fs'
import {join} from 'path'

const input = readFileSync(join(__dirname, './input.txt'), 'utf-8');
let output = input.split("")

const letters = ['A','B','C','X','Y','Z']
const sequence = output.filter(letter => letters.includes(letter))
let score = 0;

for (let i = 0; i < sequence.length; i++){
    console.log(i)
    if (sequence[i]==="A"){
        if(sequence[i+1]==="X"){
            console.log("TIE");
            score = score + 3 + 1;

            
        }if (sequence[i+1]==="Y") {
            console.log("WIN");
            score = score + 6 + 2;

            
        } if (sequence[i+1]==="Z") {
            console.log("LOSE");
            score = score + 0 + 3;
        }

    } if (sequence[i]==="B") {
        if(sequence[i+1]==="X"){
            console.log("LOSE");
            score = score + 0 + 1;
            
        }if (sequence[i+1]==="Y") {
            console.log("TIE");
            score = score + 3 + 2;
            
        } if (sequence[i+1]==="Z") {
            console.log("WIN");
            score = score + 6 + 3;
        }
    } if(sequence[i]==="C") {
        if(sequence[i+1]==="X"){
            console.log("WIN");
            score = score + 6 + 1;
            
        }if (sequence[i+1]==="Y") {
            console.log("LOSE");
            score = score + 0 + 2;
            
        } if (sequence[i+1]==="Z") {
            console.log("TIE");
            score = score + 3 + 3;
        }
    }
}


console.log(score)
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



