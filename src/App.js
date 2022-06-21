import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes>
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercises />} />
        <Route path="/user" element={<CreateUsers />} />
      </Routes>
    </Router>
  );
}

export default App;