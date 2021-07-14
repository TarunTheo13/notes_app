'use strict';

class Notes {
  constructor() {
    this.notes = []
    this.abbreviation;
  };

  createNote(note) {
    if (note.length <= 20) {
      this.abbreviation = note;
      this.notes.push([this.abbreviation, note]);
    } else {
      this.abbreviation = note.substring(0, 20)
      this.notes.push([this.abbreviation, note]);
    };
  };

};