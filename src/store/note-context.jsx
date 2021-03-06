import React from "react";

const noteState = {
  notes: [],
  pinnedNotes: [],
  unpinnedNotes: [],
  searchText: "",
  setNotes: (notes) => {},
  addNote: (text) => {},
  deleteNote: (id) => {},
  pinNote: (id) => {},
};

const NoteContext = React.createContext(noteState);

export default NoteContext;
