
it('creates a note', function(){
  let note = new Notes;
  expect(note.createNote('Books')).toEqual(note.values);
});

it('shows the first 20 characters of the note', function(){
  let note = new Notes;
  expect(note.createNote('These are my favourite books')).toEqual(note.keys)
});

it('Saves the original note, not just 20 characters', function(){
  let note = new Notes;
  expect(note.createNote('Well if these notes are not saved, I will be gutted')).toEqual(note.value)
});
