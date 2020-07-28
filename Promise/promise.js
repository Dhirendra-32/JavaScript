// syntax of promise

let promise_obj = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a == 4) {
    resolve("sucess");
  } else {
    reject("failed");
  }
});

promise_obj
  .then((message) => {
    console.log("this is in the resolve" + message);
  })
  .catch((message) => {
    console.log("this is in the catch" + message);
  });

console.log(promise_obj);
