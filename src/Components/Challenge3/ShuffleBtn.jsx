import React from "react";
import './ShuffleBtn.css'

const ShuffleHandler = ({ something }) => {
    const shuffleIt = function () {
        const wisdomEncryption = something.split("");

        const wisdomEncrypter = (array) => {
            let wisdomEncrypted = array;
            for (let i = 0; i < 40; i++) {
                const switchOne = Math.floor(Math.random() * (wisdomEncrypted.length));
                const switchTwo = Math.floor(Math.random() * (wisdomEncrypted.length));
                [wisdomEncrypted[switchOne], wisdomEncrypted[switchTwo]] = [wisdomEncrypted[switchTwo], wisdomEncrypted[switchOne]]
            }
            return wisdomEncrypted
        }

        console.log(wisdomEncrypter(wisdomEncryption))

        document.getElementById('encrypted').textContent = `
        ${wisdomEncrypter(wisdomEncryption)}
        `
    }

    return (
        <div>
            <button className="btn" onClick={shuffleIt}>Shuffle it</button>
            <div>
                <p id="encrypted"></p>
            </div>
        </div>
    )
}

export default ShuffleHandler;