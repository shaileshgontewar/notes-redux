import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_NOTE } from "../redux/features/Action";
import { useNavigate } from "react-router-dom";

const NotesForm = () => {
  const note = useSelector((state) => state.notes);
  console.log(note.length);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    let id = note.length ? note[note.length - 1].id + 1 : 1;
    let newNote = {
      id: id,
      title: title,
      content: content,
    };
    dispatch({ type: ADD_NOTE, payload: newNote });
    navigate("/list");
    console.log(title, content);
  };
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title -</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content -</label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button variant="contained" color="success" type="submit">
          Summit
        </Button>
      </form>
    </div>
  );
};

export default NotesForm;
