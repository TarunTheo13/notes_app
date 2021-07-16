document.addEventListener("DOMContentLoaded", () => {

  const notes = new Notes();
  let noteCounter = 0
  
  const updateNotes = () => {
    const array = notes.notes[noteCounter];
    const newA = document.createElement("a");
    
    const newContent = document.createTextNode(array[0]);
    newA.appendChild(newContent);
    newA.classList.add("listNotes");
    const currentElement = document.getElementById("pikachu");
    document.body.insertBefore(newA, currentElement);
    newA.href = ""
    newA.addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      document.getElementById("fullNote").innerHTML = array[1];
      document.getElementById('fullNote').classList.add("fullNotes");
    });
    const newBreak = document.createElement("br");
    document.body.insertBefore(newBreak, currentElement);
    noteCounter++;
  };

  document.querySelector('#create').addEventListener('click', () => {
    notes.createNote(document.getElementById('pad').value);
    document.getElementById('pad').value = ""
    updateNotes();
  });

  const data = { username: 'example' };

  fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'text': "Hello, :earth_africa: :smile: :see_no_evil: :alien: :heart: :blue_heart:"}),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

});
