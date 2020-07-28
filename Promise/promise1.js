// using callback first

// let userleft = true;
// let stillWatchingYoutube = true;

// function DetectUserActivity(callback, errorCallback) {
//   if (userleft) {
//     errorCallback(() => console.log("user is left shut down system"));
//   } else if (stillWatchingYoutube) {
//     errorCallback(() => console.log("user is still watching youtube dont shutdown system"));
//   } else {
//     callback();
//   }
// }

// DetectUserActivity(
//   () => console.log("hi"),
//   () => console.log("bi")
// );

// "using promise";

let userleft = false;
let stillWatchingYoutube = false;

function DetectUserActivityPromise() {
  return new Promise((resolve, reject) => {
    if (userleft) {
      reject("nothing");
    } else if (stillWatchingYoutube) {
      reject("nothing");
    } else {
      resolve("Sucess user is online");
    }
  });
}

DetectUserActivityPromise()
  .then((message) => console.log(message))
  .catch((message) => console.log(message + "activity"));
