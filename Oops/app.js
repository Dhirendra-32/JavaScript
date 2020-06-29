// Person constructor

function Person(name, dob) {
  // Constructure has one property name

  this.name = name;
  this.birthday = new Date(dob);

  this.CalculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();

    const ageDate = new Date(diff);

    return Math.abs(ageDate.getFullYear() - 1970);
  };
}

// Instanciate object with constructore

const Brad = new Person("brad", "02/12/1997");

// const John = new Person("john", 34);

console.log(Brad.birthday);

console.log(Brad.CalculateAge());
