const id = "100";

// ==
if (id == 100) {
  console.log("equal");
} else {
  console.log("not equal");
}

// not equal to

if (id != 101) {
  console.log("equal");
} else {
  console.log("not equal");
}

// considering type also whiile compareing(!==)

// test if undefined
if (id === 100) {
  console.log("correct ");
} else {
  console.log("incorrect");
}

if (typeof id !== "undefined") {
  console.log(`the id is ${id}`);
} else {
  console.log("no id");
}




