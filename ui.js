class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class= "row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target=_blank class="btn btn-outline-info btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-pill badge-light">Followers : ${user.followers}</span>
                <span class="badge badge-pill badge-success">Public following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Website/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Twitter handle : ${user.twitter_username}</li>
                    <li class="list-group-item">Member since : ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos">
    </div>

    `;
  }

  showRepos(repos) {
    console.log(repos);
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}
                </div>
                <div class="col-md-6">
                    <span class="badge badge-pill badge-primary">Stars : ${repo.stargazers_url}</span>
                    <span class="badge badge-pill badge-secondary">Watchers : ${repo.watchers_count}</span>
                    <span class="badge badge-pill badge-light">Forks : ${repo.forks_count}</span>
                </div>

            </div>
        </div>
        `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.innerText = message;
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

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
}
