const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("searchUser");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", getInput);

function getInput() {
  if (searchUser.value !== " ") {
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === "Not Found") {
        //hata
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
}
