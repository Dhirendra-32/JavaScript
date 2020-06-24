/* 1. primitive data type */

/*
String;
Number(int, float, double);
Boolean;
Null;
undefined;
Symbol(ES6)
*/

console.log(" primitive data type");

const name = "Dhirendra";

console.log(typeof name);

const hasKid = true;

console.log(typeof hasKid);

const car = null;
console.log(typeof car);

let monkey;
console.log(monkey);

const sym = Symbol();

console.log(typeof sym);

/*2 .Reference type data type*/

/*
Array
Object
Function
Date
*/

const arr = [1, 2, 3, 4, 5, 6];

console.log(typeof arr);

const litrals = { city: "Jabalpur", name: "Bhopal" };

console.log(typeof litrals);

const date = new Date();

console.log(typeof date);
