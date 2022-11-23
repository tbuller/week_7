class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoName);
        this.display(repoData);
        console.log(repoData);
      });
    });
  }

  display(repo) {
    document.querySelector('#repo-name').append(repo.full_name);
    document.querySelector('#repo-description').append(repo.description);
    const urlCreator = window.URL;
    document.getElementById('image').src = urlCreator.createObjectURL(repo);

  }
}

module.exports = GithubView;