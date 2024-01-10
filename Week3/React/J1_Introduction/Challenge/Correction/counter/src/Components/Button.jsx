
import { useState, useEffect, useRef } from "react"
import './Button.css'

const timer = 1000;
const MAX_COUNTER = 10;

// définition d'un composant
function Button({ step, modulo }) {
    // Hook pour gérer l'état d'un state
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(false)

    // Hook qui permet de créer une variable local au composant
    // en gardant la valeur si elle change, de variable durant la vie du composant
    const interval = useRef(null)

    // Hook useEffect permet de surveiller (watcher) les changements des states
    useEffect(() => {

        console.log(count)

        if (count >= MAX_COUNTER) clearInterval(interval.current);

    }, [count]) // dans le tableau ici on met les states à surveiller

    const handleStart = e => {
        interval.current = setInterval(() => {
            if (count >= MAX_COUNTER) { clearInterval(interval.current); return }

            // ici on n'accède pas aux valeurs de count qui changent dans cette partie asynchrone
            // quand on passe une fonction fléchée à la méthode qui met à jour le state
            // La mise à jour du state est faite de manière synchrone
            setCount(count => modulo ? (count + step) % modulo : (count + step))

        }, timer)

        setDisabled(true);
    }

    const handleStop = e => {
        clearInterval(interval.current);
        setDisabled(false);
    }

    const handleReset = e => {
        handleStop();
        setCount(0);
        setDisabled(false);
    }

    return (
        <>
            <h2>Step : {step} {modulo ? `Modulo ${modulo}` : null}</h2>
            <p>{count}</p>
            {/**
       * la propriété disabled de React 
       */}
            <button disabled={disabled || (count == MAX_COUNTER)} className="btn" onClick={handleStart}>Start</button>
            <button disabled={!disabled || (count == MAX_COUNTER)} className="btn" onClick={handleStop}>Stop</button>
            {count > 0 && (
                <button className="btn" onClick={handleReset}>Reset</button>
            )}
        </>
    );
} 

export default Button;