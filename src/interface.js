document.addEventListener("DOMContentLoaded", () => {

  const notes = new Notes();
  
  const updateNotes = (string) => {
    const newA = document.createElement("a");
    const newContent = document.createTextNode(string);
    newA.appendChild(newContent);
    const currentElement = document.getElementById("pikachu");
    document.body.insertBefore(newA, currentElement);
    const newBreak = document.createElement("br");
    document.body.insertBefore(newBreak, currentElement);
  };

  document.querySelector('#create').addEventListener('click', () => {
    notes.createNote(document.getElementById('pad').value);
    console.log(notes.notes)
    document.getElementById('pad').value = ""
    updateNotes(notes.abbreviation)
  });
});

  // After we create a new note
  // grab abreviation from new note.
  // pass abreviation as argumet to update notes.
  // use abreviation as content for new Element.
