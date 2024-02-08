import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const [intervalId, setIntervalId] = useState(null);

    // Gère l'incrémentation manuelle lors du clic sur le bouton "Increment"
    const handleIncrement = () => {
        dispatch(increment(1));
    };

    // Démarre l'incrémentation automatique à intervalles réguliers
    const startAutoIncrement = () => {
        const id = setInterval(() => {
            dispatch(increment(1));
        }, 1000); // Modifiez l'intervalle (en millisecondes) selon vos besoins
        setIntervalId(id);
    };

    // Arrête l'incrémentation automatique
    const stopAutoIncrement = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    // Effet secondaire pour nettoyer l'intervalle lors du démontage du composant
    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
        <div>
            <h2>Compteur : {count}</h2>
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded"
                onClick={handleIncrement}
            >
                Incrémenter
            </button>
            <button
                type="button"
                className="bg-green-500 hover:bg-green-700 m-2 text-white font-bold py-2 px-4 rounded"
                onClick={startAutoIncrement}
            >
                Démarrer l'incrémentation automatique
            </button>
            <button
                type="button"
                className="bg-red-500 hover:bg-red-700 m-2 text-white font-bold py-2 px-4 rounded"
                onClick={stopAutoIncrement}
            >
                Arrêter l'incrémentation automatique
            </button>
        </div>
    );
};

export default Counter;