import '../App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber } from '../store/numberSlice'

function Number() {
    const { numbers } = useSelector(s => s.number)
    const dispatch = useDispatch()
    const [number, setNumber] = useState('')

    const handleChange = e => {
        const { value, name } = e.target ;
        setNumber(value);
    }

    const  handleAdd = () => {
        if(number.trim()) {dispatch(addNumber(number)) ; setNumber('')}
    }

    console.log(numbers)
    
    return (
        <>
            <p> <input type="text" name="number" value={number} onChange={handleChange}/>  </p>
            <p><button onClick={ handleAdd }>Add</button></p>
            {numbers.length > 0 && (
                <ul>
                    {numbers.map(({ id, number }) => <li key={id}>{number}</li>)}
                </ul>
            )}
        </>
    )
}

export default Number