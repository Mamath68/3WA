// SameTypePokemons.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SameTypePokemons = () => {
    const { type } = useParams();
    const [sameTypePokemons, setSameTypePokemons] = useState([]);

    useEffect(() => {
        const fetchSameTypePokemons = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const data = await response.json();
            setSameTypePokemons(data.pokemon.map(pokemon => pokemon.pokemon));
        };

        fetchSameTypePokemons();
    }, [type]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 capitalize">{type} Pokémon</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sameTypePokemons.map((sameTypePokemon, index) => (
                    <li key={index} className="bg-white rounded p-4 shadow-md">
                        <Link to={`/pokemon/${sameTypePokemon.name}`} className="text-no-underline">
                            <h3 className="text-xl font-semibold mb-2 capitalize">{sameTypePokemon.name}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SameTypePokemons;
