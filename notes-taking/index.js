const Model = require("./todoModel");
const View = require("./todoView");

const model = new Model();
model.addNote('This is an example note');

const view = new View(model);

view.displayNotes();