import React from "react";

// Composant réutilisable pour la saisie d'un nombre avec un label
const BaseNumberInput = ({ label, onChange, value, readOnly }) => {
  return (
    <div className="mb-4">
      {/* Label pour l'entrée */}
      <label className="block text-gray-700">{label}</label>

      {/* Champ de saisie */}
      <input
        className="border rounded py-2 px-3 w-full"
        type="text"
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};

export default BaseNumberInput;
