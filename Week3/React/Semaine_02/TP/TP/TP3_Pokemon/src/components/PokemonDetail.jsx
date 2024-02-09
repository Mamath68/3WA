import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const PokemonDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        };

        fetchPokemonDetail();
    }, [id]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Retour</button>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 capitalize">{pokemon.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="mb-4">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto w-full max-w-lg rounded" />
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="text-lg">
                                <span className="font-bold">Numéro:</span> {pokemon.id}
                            </p>
                            <p className="text-lg capitalize">
                                <span className="font-bold">Types:</span> {pokemon.types.map(type => (
                                    <Link key={type.type.name} to={`/pokemon/type/${type.type.name}`} className="text-blue-500 capitalize mr-2">
                                        {type.type.name}
                                    </Link>
                                ))}
                            </p>
                            <p className="text-lg">
                                <span className="font-bold">Taille:</span> {pokemon.height / 10} m
                            </p>
                            <p className="text-lg">
                                <span className="font-bold">Poids:</span> {pokemon.weight / 10} kg
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-bold mb-2">Sound:</p>
                            <audio src={pokemon.cries.latest} controls></audio>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-bold mb-2">Stats:</p>
                            {pokemon.stats.map(stat => (
                                <div key={stat.stat.name} className="flex items-center mb-2">
                                    <span className="w-1/3">{stat.stat.name}:</span>
                                    <span className="w-2/3">{stat.base_stat}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <p className="text-lg">
                                <span className="font-bold">Abilities:</span> {pokemon.abilities.map(ability => (
                                    <Link key={ability.ability.name} to={`/ability/${ability.ability.name}`} className="text-blue-500 capitalize mr-2">
                                        {ability.ability.name}
                                    </Link>
                                ))}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg">
                                <span className="font-bold">Moves:</span> {pokemon.moves.map(move => (
                                    <Link key={move.move.name} to={`/move/${move.move.name}`} className="text-blue-500 capitalize mr-2">
                                        {move.move.name}
                                    </Link>
                                ))}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonDetail;
