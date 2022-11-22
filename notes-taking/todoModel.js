class Model {

  constructor(list = []) {
    this.list = list;
  }

  getNotes() {
    return this.list;
  }

  addNote(note) {
    this.list.push(note);
  }

  reset() {
    this.list = []
  }
}

module.exports = Model