import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./Action";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Nagpur",
      content: "Nagpur is orange city",
    },

    {
      id: 2,
      title: "Nagpur",
      content: "Nagpur is Metro city",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      console.log("add", action.payload.id);
      return {
        notes: [
          ...state.notes,
          {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content,
          },
        ],
      };

    case UPDATE_NOTE:
      const { id, title, content } = action.payload;
      console.log("update", id);
      return {
        existnotes: state.notes.find((note) => note.id === id),
        if(existnotes) {
          existnotes.title = title;
          existnotes.content = content;
        },
      };
    case REMOVE_NOTE:
      console.log("remove", action.payload.id);
      return {
        notes: state.notes.filter((note, id) => {
          return note.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
export default Reducer;
