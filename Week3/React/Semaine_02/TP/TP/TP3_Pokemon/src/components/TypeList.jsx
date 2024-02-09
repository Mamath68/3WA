// TypeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TypeList = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/type');
            const data = await response.json();
            setTypes(data.results);
        };

        fetchTypes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Liste des Types de Pokémon</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {types.map((type, index) => (
                    <li key={index} className="bg-white rounded p-4 shadow-md">
                        <Link to={`/type/${type.name}`} className="text-no-underline">
                            <h3 className="text-xl font-semibold mb-2 capitalize">{type.name}</h3>
                            {/* Ajoutez d'autres informations spécifiques au besoin */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TypeList;
