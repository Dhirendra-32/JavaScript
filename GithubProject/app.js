// Instanciate gitub object

let gitb = new gitub();
let ui = new Ui();

// search user get it by element by id

const searchUser = document.getElementById("searchUser");

// call eventlistner in id
// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    gitb.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepo(data.repo);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
