// AbilityList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AbilityList = () => {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        const fetchAbilities = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/ability');
            const data = await response.json();
            setAbilities(data.results);
        };

        fetchAbilities();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Liste des Capacités de Pokémon</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {abilities.map((ability, index) => (
                    <li key={index} className="bg-white rounded p-4 shadow-md">
                        <Link to={`/ability/${ability.name}`} className="text-no-underline">
                            <h3 className="text-xl font-semibold mb-2 capitalize">{ability.name}</h3>
                            {/* Ajoutez d'autres informations spécifiques au besoin */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AbilityList;
