import ShuffleHandler from './ShuffleBtn.js';
import "./ShuffleBtn.css"

export function Shuffle() {

    const wisdom = "Malheur à ceux qui se contentent de peu"
    return (
        <div className="main">
            <h1>Shuffle</h1>
            <p>{wisdom}</p>
            <ShuffleHandler something={wisdom} />
        </div>
    );
}