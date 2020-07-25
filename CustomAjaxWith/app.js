// instanciating eashttp objetc

const http = new easyHTTP();

// 1.Get some data from server
// const reposne = http.get("https://jsonplaceholder.typicode.com/posts", function (error, response) {
//   if (error) {
//     console.log(errr);
//   } else {
//     console.log(response);
//   }
// });

// 2.Post something

// Create data
const data = {
  title: "This is post request",
  body: "This is a custom post",
};

// http.post("https://jsonplaceholder.typicode.com/posts", data, function (error, post) {
//   if (error) {
//     console.log(errr);
//   } else {
//     console.log(post);
//   }
// });

// 3.Put request
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

//3 Delete request

http.delete("https://jsonplaceholder.typicode.com/posts/1", function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
