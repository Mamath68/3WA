import React from 'react'
import Button from '../Components/Button'

function Counter() {
    return (
        <main>
            <h1>Counter</h1>
            <Button step={1} />
            <Button step={2} />
            <Button step={1} modulo={10} />
        </main>
    )
}

export default Counter;