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
  it('allows a user to interact with the notes page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new Model();
    const view = new View(model);
    model.addNote('This is an example note');

    const input = document.querySelector('#add-note');
    input.value = 'Walk the dog';

    const button = document.querySelector('#add-note-button');
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[1].textContent).toBe('Walk the dog');

  });
  it('removes duplication from the list of todo items', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new Model();
    const view = new View(model);
    model.addNote('This is an example note');

    const input = document.querySelector('#add-note');
    input.value = 'Walk the dog';

    const button = document.querySelector('#add-note-button');
    button.click();
    button.click();
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(4);
    expect(document.querySelectorAll('div.note')[1].textContent).toBe('Walk the dog');

  });
});