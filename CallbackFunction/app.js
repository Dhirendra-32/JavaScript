const posts = [
  { title: "Post one", body: "this is body one " },

  { title: "Post two", body: "this is body of post two " },
];

// function createPost(post) {
//   setTimeout(function () {
//     post.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = "";

//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "post 3", body: "This is post three" });

// getPost();

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPost() {
  setTimeout(function () {
    let output = "";

    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPost);
