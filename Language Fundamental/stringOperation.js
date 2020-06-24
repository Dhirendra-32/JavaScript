const firstName = "Dhir-endra";
const lastName = "Tripathi";
const age = 12;
let val;

val = firstName + lastName;

// concatenation

val = firstName + "*" + lastName;

// aappending

val = firstName;

val += " Mishra";

val = "hello my name is " + firstName + " and i am " + age + " old";

// with Esacaping

val = " that's awesome ,i can't wait ";

// properies and method

val = firstName.length;

val = firstName.concat(" ", "Tripathi");

// case method

val = firstName.toLowerCase();

val = lastName.toUpperCase();

// making array from string

val = firstName[1];

// finding index of h

val = firstName.indexOf("h");
val = firstName.lastIndexOf("h");

// charat

val = firstName.charAt(1);

// substring method hanlding

val = firstName.substring(0, 4);

val = firstName.slice(0, 4);

val = firstName.split("-");

console.log(val);
