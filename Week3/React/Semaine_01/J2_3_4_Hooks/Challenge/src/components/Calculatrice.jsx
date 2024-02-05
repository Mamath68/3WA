import React, { useState, useReducer, useEffect } from 'react';

const initialState = {
    input: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUT':
            return { ...state, input: action.payload };
        default:
            return state;
    }
};

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
        dispatch({ type: 'SET_INPUT', payload: state.input + key });
    };

    const handleEqualsClick = () => {
        try {
            const result = eval(state.input);
            dispatch({ type: 'SET_INPUT', payload: Number(result.toFixed(2)).toString() });
        } catch (error) {
            dispatch({ type: 'SET_INPUT', payload: 'Erreur' });
        }
    };

    const handleClearClick = () => {
        dispatch({ type: 'SET_INPUT', payload: '' });
    };

    const handleBackClick = () => {
        dispatch({ type: 'SET_INPUT', payload: state.input.slice(0, -1) });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Calculatrice avec useReducer Complête</h1>
            <div className="row">
                <div className="col-md-4 mx-auto border p-4 bg-black">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Entrée"
                        value={state.input}
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
                        {[0, 'C', '=', '+'].map((item) => (
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

export default Calculator;
