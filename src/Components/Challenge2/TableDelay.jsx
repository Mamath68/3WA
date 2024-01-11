import React, { useState, useEffect, useRef } from "react";
import '../Challenge1/Button.css';
import './TableDelay.css';

function TableDelay() {
    const [numbers, setNumbers] = useState([])
    const [orderNumbers, setorderNumbers] = useState([])
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(false)

    const interval = useRef(null)


    useEffect(() => {
        if (status && count < (numbers.length - 1))
            interval.current = setTimeout(() => {
                setCount(count + 1)
            }, 1000)

    }, [status, count]) // on peut écouter le changement de deux variables

    useEffect(() => {

    }, [count])

    const handleOrder = e => {
        setStatus(true)
    }

    const generate = e => {
        const numbers = [];
        // on réinitialise le counter pour afficher les données
        setCount(0)
        // attention à supprimer au cas où le fonction asynchrone qui va mettre à jour le count
        clearTimeout(interval.current)
        const alea = () => Math.floor(Math.random() * 20) + 1
        let num = alea()
        numbers.push(num)

        while (numbers.length < 10) {
            num = alea()
            if (numbers.includes(num) == false) numbers.push(num);
        }

        setNumbers(numbers);
        setorderNumbers([...numbers].sort((a, b) => a - b))
        setStatus(false)
    }

    return (
        <>
            <p>{count}</p>
            <h2>Génération d'un tableau de 10 nombres compris entre 1 et 20 aléatoires</h2>
            <button className="btn" onClick={generate}>Generate numbers</button>
            <button className="btn" disabled={status} onClick={handleOrder}>Order numbers</button>
            {numbers.length > 0 && (
                <ul className="number">
                    {numbers.map((num, i) => <li key={i}>{num}</li>)}
                </ul>
            )}
            {status && (
                <ul className="number">
                    {orderNumbers.slice(0, count + 1).map((num, i) => <li key={i}>{num}</li>)}
                </ul>
            )}
        </>
    );
}

export default TableDelay