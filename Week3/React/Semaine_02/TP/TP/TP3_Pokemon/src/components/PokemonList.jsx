// PokemonList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemonNames }) => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const data = await Promise.all(
                pokemonNames.map(async (name) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    return response.json();
                })
            );
            setPokemonData(data);
        };
        fetchPokemonData();
    }, [pokemonNames]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Liste des 10 Pokémon les plus célèbres</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pokemonData.map((pokemon, index) => (
                    <li key={index} className="bg-white rounded p-4 shadow-md list-none">
                        <div className="bg-white rounded p-4 shadow-md">
                            <Link to={`/pokemon/${pokemon.id}`} className="text-xl font-semibold mb-2 cursor-pointer text-no-underline capitalize">{pokemon.name}</Link>
                            <p className="text-gray-600">Numéro: {pokemon.id}</p>
                            <p className="text-sm mb-2">
                                Types: {pokemon.types.map((type, typeIndex) => (
                                    <React.Fragment key={type.type.name}>
                                        <Link to={`/pokemon/type/${type.type.name}`} className="text-blue-500 capitalize">
                                            {type.type.name}
                                        </Link>
                                        {typeIndex < pokemon.types.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                            </p>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="m-auto" />
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
