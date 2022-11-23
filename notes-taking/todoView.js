class View {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note').value;
      this.addNewNote(newNote);
      document.querySelector('#add-note').value = "";
    });
  }

  addNewNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }

  displayNotes() {

    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    })

    this.model.getNotes().forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.className = 'note';
      noteEl.textContent = note;
      this.mainContainerEl.append(noteEl);
    })
    
  }
}

module.exports = View;