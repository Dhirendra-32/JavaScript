// STring
const name1 = "Dhirendra";
const name2 = new String("Dhirendra");

// == checks value but === checks type aslo

console.log("With == check");
if (name1 == name2) {
  console.log("matched");
} else {
  console.log("Dint match");
}

console.log("With === check");
if (name1 === name2) {
  console.log("matched");
} else {
  console.log("Dint match");
}
