// AbilityDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AbilityDetail = () => {
    const { ability } = useParams();
    const [abilityDetails, setAbilityDetails] = useState(null);

    useEffect(() => {
        const fetchAbilityDetails = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
            const data = await response.json();
            setAbilityDetails(data);
        };

        fetchAbilityDetails();
    }, [ability]);

    if (!abilityDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4 capitalize">{abilityDetails.name} Ability</h1>
            <div>
                <h2 className="text-2xl font-bold mb-2">Text D'ambiance :</h2>
                <p className="text-lg mb-2">{abilityDetails.flavor_text_entries[1].flavor_text}</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2">Description :</h2>
                <p className="text-lg mb-2">{abilityDetails.effect_entries[1].effect}</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2">Version Courte :</h2>
                <p className="text-lg mb-2">{abilityDetails.effect_entries[1].short_effect}</p>
            </div>
        </div>
    );
};

export default AbilityDetail;
