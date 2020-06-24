// var , let ,const three different varibale

// declaring var varible
var name = "john doe";
console.log(name);

// reassinging the previous variable
name = "Frank Pedicone";
console.log(name);

// init a varible with no value
var greeting;
console.log(greeting); /*will give undefine data type*/

// reusing previous varible
greeting = "Welcome javascript";
console.log(greeting);

/* Follow camelCase for variable  */
/* rule and convention letter ,_,$   */
/* Can't start with number ,will give error */

console.log("Let varible start from here");

// declaring Let varible
let nam = "john doe";
console.log(nam);

// reassinging the previous variable
nam = "Frank Pedicone";
console.log(nam);

// init a varible with no value
let greetin;
console.log(greetin); /*will give undefine data type*/

// reusing previous varible
greetin = "Welcome javascript";
console.log(greetin);

console.log("const varible start from here");

// declaring const varible
const na = "john doe";
console.log(na);

// // reassinging not possible
// na = "Frank Pedicone";
console.log(na);

// // init a varible with no value not possile in conts value has to define
const greeti = 1;
console.log(greeti); /*will give undefine data type*/

// reassigning not possible

// / important stuff about about using const with object
console.log("important stuff about about using const with object");

console.log("below person object ");
const person = {
  firstname: "Dhirendra",
  lastnam: "trapthi",
};

person.firstname = "Neeraj";
person.lastnam = "gautam";

// console.log(person);

// same goes witharrays
console.log("below arr object ");
const arr = [1, 2, 3, 4, 5, 6, 7];

arr[1] = 10;
arr.push(8);

console.log(arr);
