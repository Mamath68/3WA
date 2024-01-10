import React, { useEffect, useRef, useState } from 'react'
import '../Components/Button.css';

function Number() {

    const [numbers, setNumbers] = useState([])
    const [orderNumbers, setOrderNumbers] = useState([])
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(false)

    const interval = useRef(null)

    const minNumber = () => {
        const m = Math.min(numbers);
        const newNumers = numbers.filter(number => number !== m);
        setNumbers(newNumers);
    }

    useEffect(() => {
        if (status && count < (numbers.length - 1)) {
            interval.current = setInterval(() => {
                setCount(count + 1)
            }, 1000)
        }
    }, [status, count])

    const handleOrder = () => {
        setStatus(true)
    }

    const handleClick = () => {
        const numbers = [];
        const alea = () => Math.floor(Math.random() * 20) + 1;
        let num = alea();
        numbers.push(num)

        while (numbers.length < 10) {
            num = alea();
            if (!numbers.includes(num)) { numbers.push(num) }
        }

        setNumbers(numbers);
        numbers.sort((a, b) => a - b);
        setOrderNumbers(numbers);
        setStatus(false);
    }

    return (
        <main>
            <p>{count}</p>
            <h1>Génération d'un tableau de 10 nombre compris entre 1 et 20 de maniere aleatoire</h1>
            {numbers.length > 0 && (
                <ul>
                    {numbers.map((number, index) =>
                        <li key={index}>{number}</li>
                    )}
                </ul>)}
            <button type="button" className="btn btn-primary" onClick={handleClick}>Generate Numbers</button>
            <button type="button" disabled={!(numbers.length > 0)} className="btn btn-primary" onClick={handleOrder}>Order Numbers</button>
        </main>
    )
}

export default Number;