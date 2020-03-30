import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

const Landing = () => {
  // const [toMuscleGroup, setToMuscleGroup] = useState(false); // or initialState
  return (
    // {toMuscleGroup ? <Redirect to="/muscleGroup"/> : null}
    // https://github.com/httpJunkie/react-todo
    // https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link
    <div className="app">
      <div className="urec-sec-home-m">
        <Link
          to="/muscleGroup"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            width: "auto",
            height: "auto"
          }}
        >
          MUSCLE GROUP
        </Link>
      </div>
      <div className="urec-sec-home-e">
        <Link
          to="/exerciseMachines"
          style={{
            textDecoration: "none",
            color: "white",
            display: "block",
            width: "auto",
            height: "auto"
          }}
        >
          EX MACHINES
        </Link>
      </div>
    </div>
  );
};

export default Landing;
