// gitub class

class gitub {
  constructor() {
    this.client_id = "689471d2082aa481cd44";
    this.client_secret = "cd741d206e90e29425025ea7c202f0df4542fa57";
    this.repos_count = 5;
    this.repos_sort = "Created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile: profileData,
      repo: repoData,
    };
  }
}
