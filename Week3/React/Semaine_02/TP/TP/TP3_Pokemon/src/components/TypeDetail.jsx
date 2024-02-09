// TypeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TypeDetail = () => {
    const { type } = useParams();
    const [typeDetails, setTypeDetails] = useState(null);

    useEffect(() => {
        const fetchTypeDetails = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const data = await response.json();
            setTypeDetails(data);
        };

        fetchTypeDetails();
    }, [type]);

    if (!typeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4 capitalize">{typeDetails.name} Type</h1>
            <h2 className="text-2xl font-bold mb-2">Relations avec les autres types :</h2>
            <div className="text-lg m-4">
                <p className="text-lg mb-2">Double Dégats de : {typeDetails.damage_relations.double_damage_from.length > 0 ? typeDetails.damage_relations.double_damage_from.map(item => item.name).join(', ') : 'personne'}</p>
                <p className="text-lg mb-2">Double Dégats envers : {typeDetails.damage_relations.double_damage_to.length > 0 ? typeDetails.damage_relations.double_damage_to.map(item => item.name).join(', ') : 'personne'}</p>
                <p className="text-lg mb-2">Demi Dégats de : {typeDetails.damage_relations.half_damage_from.length > 0 ? typeDetails.damage_relations.half_damage_from.map(item => item.name).join(', ') : 'personne'}</p>
                <p className="text-lg mb-2">Demi Dégats envers : {typeDetails.damage_relations.half_damage_to.length > 0 ? typeDetails.damage_relations.half_damage_to.map(item => item.name).join(', ') : 'personne'}</p>
                <p className="text-lg mb-2">Immunité pour : {typeDetails.damage_relations.no_damage_from.length > 0 ? typeDetails.damage_relations.no_damage_from.map(item => item.name).join(', ') : 'personne'}</p>
                <p className="text-lg mb-2">Immunité envers : {typeDetails.damage_relations.no_damage_to.length > 0 ? typeDetails.damage_relations.no_damage_to.map(item => item.name).join(', ') : 'personne'}</p>
            </div>
            <div className='m-4'>
                <h2 className="text-2xl font-bold mb-2">Special Move :</h2>
                <p className="text-lg mb-2">Mouvements Special : {typeDetails.move_damage_class.length > 0 ? typeDetails.move_damage_class.map(item => item.name).join(', ') : 'aucun'}</p>
            </div>
            <div className='m-4'>
                <h2 className="text-2xl font-bold mb-2">Moves :</h2>
                <p className="text-lg mb-2">Mouvements : {typeDetails.moves.length > 0 ? typeDetails.moves.map(item => item.name).join(', ') : 'aucun'}</p>
            </div>
        </div>
    );
};

export default TypeDetail;
