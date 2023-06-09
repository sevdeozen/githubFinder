class Github {
  // veri tutma
  constructor() {
    this.client_id = "021aef7adbbee4c0376b";
    this.client_secret = "00303f5f24e266f6c53b3abb841c2616dfefc988";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
