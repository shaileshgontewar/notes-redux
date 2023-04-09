import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { REMOVE_NOTE } from "../redux/features/Action";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>NotesList</h2>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <h1>{note.id}</h1>
            <h5>{note.title}</h5>
            <p>{note.content}</p>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() =>
                dispatch({ type: REMOVE_NOTE, payload: { id: note.id } })
              }
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
