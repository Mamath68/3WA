// src/components/Calendrier.js
import React, { useReducer, useEffect } from "react";
import {reducer, initialState } from "./../reducer/calendar";
import localforage from "localforage";

const Calendrier = () => {
  const [calculations, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Charger les calculs depuis le stockage local lors du montage du composant
    const loadCalculations = async () => {
      try {
        const storedCalculations =
          (await localforage.getItem("calculations")) || initialState;
        dispatch({ type: "LOAD_CALCULATIONS", payload: storedCalculations });
      } catch (error) {
        console.error("Error loading calculations from local storage:", error);
      }
    };

    loadCalculations();
  }, []);

  return (
    <div>
      {/* Afficher les jours de la semaine */}
      <div style={{ display: "flex" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((day) => (
          <button
            key={day}
            onClick={() => setCurrentDay(day)}
            style={{ marginRight: "10px" }}>
            Jour {day + 1}
          </button>
        ))}
      </div>
      {/* Afficher les calculs pour chaque jour */}
      {[0, 1, 2, 3, 4, 5, 6].map((day) => (
        <div key={day}>
          <h3>Jour {day + 1}</h3>
          <ul>
            {calculations[day] &&
              calculations[day].map((calculation, index) => (
                <li key={index}>{calculation}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Calendrier;
