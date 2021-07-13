document.addEventListener("DOMContentLoaded", () => {
  
  const notes = new Notes();

  document.querySelector('#create').addEventListener('click', () => {
    notes.createNote(document.getElementById('pad').value);
    console.log(notes.notes)
    document.getElementById('pad').value = ""
  });
});
