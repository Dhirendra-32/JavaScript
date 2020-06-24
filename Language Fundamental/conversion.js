let val;

//Number to string see output before
val = 12;
console.log(val);
console.log(typeof val);
console.log(val.length); /*Lenth string properties does not work on number*/

/*Lenth string properties */
console.log(String(val).length);

console.log(String(21 + 23));
console.log(String(21 + 23).length);

//Boolea to String see output before
val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

// date to String

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//string to Number  see output before
