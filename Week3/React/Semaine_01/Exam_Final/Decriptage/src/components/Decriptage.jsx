import React, { useState } from 'react'

const CeasarDecipher = ({ text, shift }) => {
    return text
        .split('')
        .map((char) => {
            if (char.match(/[a-zA-Z]/)) {
                const code = char.charCodeAt(0);
                let offset = 65;

                if (char.match(/[a-z]/)) {
                    offset = 97;
                }

                return String.fromCharCode(((code - offset + (26 - (shift % 26))) % 26) + offset);
            } else if (char.match(/[0-9]/)) {
                const code = char.charCodeAt(0);
                return String.fromCharCode(((code - 48 + (10 - (shift % 10))) % 10) + 48);
            } else {
                return char;
            }
        })
        .join('');
};

const CeasarCipher = ({ text, shift }) => {
    return text
        .split('')
        .map((char) => {
            if (char.match(/[a-zA-Z]/)) {
                const code = char.charCodeAt(0);
                let offset = 65;

                if (char.match(/[a-z]/)) {
                    offset = 97;
                }

                return String.fromCharCode(((code - offset + shift) % 26) + offset);
            } else if (char.match(/[0-9]/)) {
                const code = char.charCodeAt(0);
                return String.fromCharCode(((code - 48 + shift) % 10) + 48);
            } else {
                return char;
            }
        })
        .join('');
};

const Decriptage = () => {
    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState('3');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleEncrypt = () => {
        const result = CeasarCipher({ text: inputText, shift: parseInt(shift, 10) || 0 });
        setEncryptedText(result);
        setDecryptedText(''); // Réinitialiser le texte décrypté
    };

    const handleDecrypt = () => {
        const result = CeasarDecipher({ text: encryptedText, shift: parseInt(shift, 10) || 0 });
        setDecryptedText(result);
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-md w-full">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 w-full mb-4"
                    placeholder="Entrez le texte à crypter"
                />
                <div className="flex items-center mb-4">
                    <label className="mr-2">Décalage :</label>
                    <input
                        type="number"
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        className="border border-gray-300 p-2 w-16"
                    />
                </div>
                <button
                    onClick={handleEncrypt}
                    className="btn-primary"
                >
                    Crypter
                </button>

                {encryptedText && (
                    <div className="mt-4">
                        <strong>Résultat crypté :</strong>
                        <p className="mt-2">{encryptedText}</p>
                    </div>
                )}

                {encryptedText && (
                    <button
                        onClick={handleDecrypt}
                        className="btn-success"
                    >
                        Décrypter
                    </button>
                )}

                {decryptedText && (
                    <div className="mt-4">
                        <strong>Résultat décrypté :</strong>
                        <p className="mt-2">{decryptedText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Decriptage;