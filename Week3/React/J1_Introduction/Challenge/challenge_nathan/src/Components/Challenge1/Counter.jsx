import Button from "./Button";
import React from 'react'

function Counter() {
    return (
        <>
            <h1>Counter Challenge 1</h1>
            <Button step={1} />
            <Button step={2} />
            <Button step={1} modulo={2} />
        </>
    );
}

export default Counter