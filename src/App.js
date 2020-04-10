import React from "react";
import "./App.css";
import CoursesContainer from "./components/CoursesContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowCourse from "./components/ShowCourse";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={CoursesContainer} />
        <Route exact path='/:courseId' component={ShowCourse} />
      </Router>
    </div>
  );
}

export default App;
