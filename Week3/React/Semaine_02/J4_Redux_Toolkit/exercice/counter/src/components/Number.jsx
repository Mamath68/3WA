import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from '../store/numberSlice';

function Number() {
    const { numbers } = useSelector((state) => state.number);
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setNumber(value);
    }

    const handleAddNumber = () => {
        if (number.trim()) {
            dispatch(addNumber({ number }));
        }
    }
    return (
        <>
            <p>
                <input type="number" name="number" value={number} onChange={handleChange} />
            </p>
            <p>
                <button type="button" onClick={handleAddNumber}>Add Number</button>
            </p>
            {numbers.length > 0 && (
                <ul>
                    {numbers.map((number, index) => <li key={index}>{number.number}</li>)}
                </ul>
            )}
        </>
    )
}

export default Number