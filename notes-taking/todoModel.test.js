const Model = require('./todoModel');

describe('Model', () => {
  it('returns the list of todo items', () => {
    model = new Model;
    expect(model.getNotes()).toEqual([])
  });
  it('adds notes to the list', () => {
    model = new Model;
    model.addNote('Buy milk');
    model.addNote('go for a run');
    expect(model.getNotes()).toEqual(['Buy milk', 'go for a run'])
  });
  it('removes all notes from the list', () => {
    model = new Model;
    model.addNote('Buy milk');
    model.addNote('go for a run');
    model.reset()
    expect(model.getNotes()).toEqual([])
  });
});