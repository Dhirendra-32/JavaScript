document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getAPI);

function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get Local JSon data

function getJson() {
  fetch("post.JSON")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let a = "";
      data.forEach(function (post) {
        a += `<li>${post.ID}</li>`;
      });

      document.getElementById("output").innerHTML = a;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get API JSon data

function getAPI() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let a = "";
      data.forEach(function (user) {
        a += `<li>${user.login}</li>`;
      });

      document.getElementById("output").innerHTML = a;
    })
    .catch(function (err) {
      console.log(err);
    });
}
