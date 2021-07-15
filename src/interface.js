document.addEventListener("DOMContentLoaded", () => {

  const notes = new Notes();
  let noteCounter = 0
  
  const updateNotes = () => {
    const array = notes.notes[noteCounter];
    const newA = document.createElement("a");
    const newContent = document.createTextNode(getEmojiData(array[0]));
    newA.appendChild(newContent);
    const currentElement = document.getElementById("pikachu");
    document.body.insertBefore(newA, currentElement);
    newA.href = ""
    newA.addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      document.getElementById("fullNote").innerHTML = array[1];
    });
    const newBreak = document.createElement("br");
    document.body.insertBefore(newBreak, currentElement);
    noteCounter++
  };

  document.querySelector('#create').addEventListener('click', () => {
    notes.createNote(document.getElementById('pad').value);
    document.getElementById('pad').value = ""
    updateNotes()
  });


// addEventLinstener for getEmojiData()? - how to use the function below?

  function getEmojiData(inputText) {
    const emojiText = 'bilbo baggins';
    fetch('https://makers-emojify.herokuapp.com', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'text': inputText}),
    })
    .then(response => response.json())
    .then(inputText => {
      //console.log('Success:', inputText);
      const emojiText = inputText.emojified_text;
      console.log(emojiText);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    return emojiText;
    
  };

});
