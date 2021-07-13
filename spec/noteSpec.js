
it('creates a note', function(){
  let note = new Note('Books');
  expect(note.createNote).toEqual('Books')
})

it('shows the first 20 characters of the note', function(){
  let note = new Note('These are my favourite books')
  expect(note.getTwenty).toEqual('These are my favourite b')
})