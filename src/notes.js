'use strict';

class Notes {
  constructor() {
    this.notes = []
  };

  createNote(note) {
    if (note.length <= 20) {
      this.notes.push({note: note});
    } else {
      let abbreviation = note.substring(0, 20)
      this.notes.push({abbreviation: note});
    };
  };

};