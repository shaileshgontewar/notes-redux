import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotesList from "./component/NotesList";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import EditForm from "./component/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form />}></Route>
        <Route path="/edit/:id" element={<EditForm />}></Route>
        <Route path="/list" element={<NotesList />}></Route>
        <Route path="/" exact element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
