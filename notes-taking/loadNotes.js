class Client {

  constructor(model) {
    this.model = model
  }

  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json)
      .then(data => {
        callback(data)
      });
  }

}

module.exports= Client;