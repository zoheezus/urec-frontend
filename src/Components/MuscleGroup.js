import React from "react";
import "../App.css";

function ExerciseMachines() {
  return (
    <div className="app">
      <div className="columnL">
        <div className="urec-sec-cat-l">Legs</div>
        <div className="urec-sec-cat-l">Arms</div>
        <div className="urec-sec-cat-l">Back</div>
      </div>
      <div className="columnR">
        <div className="urec-sec-cat-r">Chest</div>
        <div className="urec-sec-cat-r">Shoulders</div>
        <div className="urec-sec-cat-r">Abs</div>
      </div>
    </div>
  );
}

export default ExerciseMachines;