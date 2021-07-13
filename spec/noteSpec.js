
it('creates a note', function(){
  let note = new Notes;
  expect(note.createNote('Books')).toEqual(note.values);
});

it('shows the first 20 characters of the note', function(){
    let note = new Notes;
    expect(note.createNote('These are my favourite books')).toEqual(note.keys)
  })
