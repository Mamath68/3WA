import React, { useState, useEffect } from 'react';

function Calculatrice() {
    const [input, setInput] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;

            if (!isNaN(key) || ['+', '-', '*', '/', '=', 'Enter'].includes(key)) {
                handleKeyClick(key);
            } else if (key === 'Backspace') {
                handleBackClick();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleKeyClick = (key) => {
        setInput((prevInput) => prevInput + key);
    };

    const handleEqualsClick = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Erreur');
        }
    };

    const handleClearClick = () => {
        setInput('');
    };

    const handleBackClick = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Calculatrice React</h1>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Entrez un nombre"
                        value={input}
                        readOnly
                    />

                    <div className="d-flex justify-content-between">
                        {[7, 8, 9, '/'].map((item) => (
                            <button
                                key={item}
                                className="btn btn-secondary"
                                onClick={() => handleKeyClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="d-flex justify-content-between mt-2">
                        {[4, 5, 6, '*'].map((item) => (
                            <button
                                key={item}
                                className="btn btn-secondary"
                                onClick={() => handleKeyClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="d-flex justify-content-between mt-2">
                        {[1, 2, 3, '-'].map((item) => (
                            <button
                                key={item}
                                className="btn btn-secondary"
                                onClick={() => handleKeyClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="d-flex justify-content-between mt-2">
                        {[0, '+', '=', 'C'].map((item) => (
                            <button
                                key={item}
                                className={`btn ${item === '=' ? 'btn-primary' : 'btn-secondary'
                                    }`}
                                onClick={
                                    item === '=' ? handleEqualsClick : item === 'C' ? handleClearClick : () => handleKeyClick(item)
                                }
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="mt-2">
                        <button className="btn btn-secondary" onClick={handleBackClick}>
                            Retour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculatrice;
