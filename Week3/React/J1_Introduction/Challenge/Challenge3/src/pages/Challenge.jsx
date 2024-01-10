import React, { useState } from 'react'

function Challenge() {
    const initialPhrase = "Malheur à ceux qui se contentent de peu.";
    const [mixedPhrase, setMixedPhrase] = useState(initialPhrase);

    const handleButtonClick = () => {
        // Split the words, shuffle them, and join them back into a sentence
        const words = mixedPhrase.split(' ');
        const shuffledWords = words.sort(() => Math.random() - 0.5);
        const newPhrase = shuffledWords.join(' ');
        setMixedPhrase(newPhrase);
    };

    return (
        <div className='container mt-5'>
            <h4 className="mb-3 fw-bold">Phrase initiale : <br />{initialPhrase}</h4>
            <h4 className="mb-3">Phrase mélangée : <br />{mixedPhrase}</h4>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Mélanger la phrase</button>
        </div>
    );
};


export default Challenge;