// Object.prototype

// Person.prototype

// Person Object

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Putting calculateAge in Person prototype

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();

  const ageDate = new Date(diff);

  return Math.abs(ageDate.getFullYear() - 1970);
};

// creatubg getfullName and putting inside in Person's proto

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person("Dhirendra", "tripathi", "02-12-1997");

const marry = new Person("Marry", "tripathi", "02-01-1999");

Person.prototype.getMarried = function (lastName) {
  this.lastName = lastName;
};

console.log(john);
console.log(marry);

console.log(marry.calculateAge());

console.log(marry.getFullName());
marry.getMarried("Sharma");

console.log(marry.getFullName());

//Marry will have access to object proto methd

console.log(marry.hasOwnProperty("firstName"));
