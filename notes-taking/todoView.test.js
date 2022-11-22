/**
 * @jest-environment jsdom
 */
const fs = require('fs')
const View = require('./todoView');
const Model = require('./todoModel');

describe('TodoView', () => {
  it('adds the notes to the page, a paragraph for each', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new Model;
    const view = new View(model);
    model.addNote('walk the dog');
    model.addNote('buy milk');
    model.addNote('give dog treats');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(3);
  });
});