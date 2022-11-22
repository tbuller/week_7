const Model = require('./todoModel');
const View = require('./todoView');

model = new Model;
view = new View(model);
model.addNote('This is an example');
view.displayNotes();

console.log('The notes app is running');