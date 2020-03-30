import React, { useState, useEffect } from "react";
import "../App.css";

const ExerciseMachines = () => {
  const [hasError, setErrors] = useState(false);
  const [vacancy, setVacancy] = useState({});
  const [inService, setInService] = useState({});
  const { equipmentName, setEquipmentName } = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://18.220.209.203/view.php/");
      res
        .json()
        .then(response => setVacancy(res))
        .then(res => setInService(res))
        .then(res => setEquipmentName(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  });

  return (
    <div className="app">
      <div className="columnL">
        <div className="urec-sec-cat-l">Bench</div>
        <div className="urec-sec-cat-l">Squat Rack</div>
        <div className="urec-sec-cat-l">Cardiovascular</div>
      </div>
      <div className="columnR">
        <div className="urec-sec-cat-r">Treadmills</div>
        <div className="urec-sec-cat-r">Lorem</div>
        <div className="urec-sec-cat-r">Lorem</div>
      </div>
    </div>
  );
};

export default ExerciseMachines;
