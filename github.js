class Github {
  constructor() {
    this.client_id = "a2da63efea1b5b98579d";
    this.client_secret = "34c4c96bd7eb6cbfe69faf8971661ba2254ae4d1";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();
    return {
      profile: profileData,
      repos: repoData,
    };
  }
}
