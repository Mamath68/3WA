import ShuffleHandler from './ShuffleBtn';
import "./ShuffleBtn.css"
import React from 'react'

function Shuffle() {
    const wisdom = "Malheur à ceux qui se contentent de peu"
    return (
        <>
            <h1>Shuffle</h1>
            <p>{wisdom}</p>
            <ShuffleHandler something={wisdom} />
        </>
    );
}

export default Shuffle