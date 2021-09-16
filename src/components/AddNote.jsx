import { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [noteText, setNoteText] = useState("");
  const CharacterLimit = 200;

  const handleChange = (event) => {
    if (CharacterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleClick = () => {
    if (noteText.trim().length > 0) {
      onAdd(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{CharacterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
