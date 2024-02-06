import React, { useReducer } from "react";
import BaseNumberInput from "./components/BaseNumberInput";

// Types d'action
const SET_DECIMAL = "SET_DECIMAL";
const SET_BINARY = "SET_BINARY";

// Fonction reducer pour gérer l'état de l'application
const reducer = (state, action) => {
  switch (action.type) {
    case SET_DECIMAL:
      return { ...state, decimalNumber: action.payload };
    case SET_BINARY:
      return { ...state, binaryNumber: action.payload };
    default:
      return state;
  }
};

// Composant principal App
const App = () => {
  // Initialisation du state avec useReducer
  const [state, dispatch] = useReducer(reducer, {
    decimalNumber: "",
    binaryNumber: "",
  });

  // Fonction de conversion décimal vers binaire
  const convertToBinary = (decimal) => {
    // Supprimer tous les caractères autres que des chiffres (0-9)
    const cleanedDecimal = decimal.replace(/\D/g, "");

    // Mettre à jour le champ décimal dans le state
    dispatch({ type: SET_DECIMAL, payload: cleanedDecimal });

    // Vérifier si la conversion est possible
    const decimalValue = parseInt(cleanedDecimal, 10);
    if (!isNaN(decimalValue) && cleanedDecimal !== "") {
      // Convertir le nombre décimal en binaire
      const binary = decimalValue.toString(2);
      dispatch({ type: SET_BINARY, payload: binary });
    } else {
      // Réinitialiser le champ binaire si la conversion n'est pas possible
      dispatch({ type: SET_BINARY, payload: "" });
    }
  };

  // Fonction de conversion binaire vers décimal
  const convertToDecimal = (binary) => {
    // Mettre à jour le champ binaire dans le state
    dispatch({ type: SET_BINARY, payload: binary });

    // Vérifier si l'entrée est une chaîne binaire valide
    if (/^[01]+$/.test(binary)) {
      // Convertir le nombre binaire en décimal
      const decimal = parseInt(binary, 2);
      dispatch({ type: SET_DECIMAL, payload: decimal });
    } else {
      // Réinitialiser le champ décimal si l'entrée n'est pas valide
      dispatch({ type: SET_DECIMAL, payload: "" });
    }
  };

  // Rendu du composant
  return (
    <div className="container mx-auto mt-8 p-8 max-w-md bg-gray-200 rounded">
      <h1 className="text-2xl font-bold mb-4">Convertisseur Binaire-Décimal</h1>

      {/* Composant BaseNumberInput pour la conversion décimal vers binaire */}
      <BaseNumberInput
        label="Nombre Décimal"
        onChange={(e) => convertToBinary(e.target.value)}
        value={state.decimalNumber}
      />

      {/* Composant BaseNumberInput pour la conversion binaire vers décimal */}
      <BaseNumberInput
        label="Nombre Binaire"
        onChange={(e) => convertToDecimal(e.target.value.replace(/[^01]/g, ""))}
        value={state.binaryNumber}
      />

      {/* Affichage du résultat */}
      <div className="mt-4">
        <p className="text-gray-800">Résultat:</p>
        <p className="text-gray-700">Nombre Décimal: {state.decimalNumber}</p>
        <p className="text-gray-700">Nombre Binaire: {state.binaryNumber}</p>
      </div>
    </div>
  );
};

export default App;
