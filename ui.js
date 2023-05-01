class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //profil arayüzünü ekrana basma
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="container border my-4 p-4">
    <div class="row">
      <div class="col-6 col-md-3">
        <img src="${user.avatar_url}" class="rounded img-fluid mb-2" />
        <a href="${user.html_url}" target="_blank" class="btn btn-primary w-100"
          >View Profile</a
        >
      </div>
      <div class="col-6 col-md-9">
        <span class="badge bg-primary fs-6">Public Repos: ${user.public_repos}</span>
        <span class="badge bg-secondary fs-6">Public Gists: ${user.public_gists}</span>
        <span class="badge bg-success fs-6">Followers: ${user.followers}</span>
        <span class="badge bg-info fs-6">Following: ${user.following}</span>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item">Biography: ${user.bio} </li>
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="fs-1 m-3">Latest Repos</h3>
  <div id="repos" class="container p-3"></div>
    `;
  }

  //repolar
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge bg-warning fs-6">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-secondary fs-6">Watching:  ${repo.watchers_count}</span>
            <span class="badge bg-success fs-6">Forks:  ${repo.forks_count}</span>
          </div>
        </div>
      </div>
    
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  //alert message
  showAlert(message, classname) {
    const div = document.createElement("div");
    //class ekleme
    div.className = classname;
    //yazıyı ekleme
    div.innerText = message;
    //paret elementi alma
    const outlet = document.getElementById("alert");
    //htmle gönderme
    outlet.appendChild(div);
    //3 sn sonra alerti yoket
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //clear

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
