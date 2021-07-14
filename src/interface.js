document.addEventListener("DOMContentLoaded", () => {
  
  const updateNotes = () => {
    document.getElementById('writtenNotes').innerText = notes.seeListIntros();
  }
  
  const notes = new Notes();

  document.querySelector('#create').addEventListener('click', () => {
    notes.createNote(document.getElementById('pad').value);
    console.log(notes.notes)
    document.getElementById('pad').value = ""
    updateNotes()
  });
});


// intros.forEach(element => {
//   <href>element</href>
// };

//document.createElement(a)