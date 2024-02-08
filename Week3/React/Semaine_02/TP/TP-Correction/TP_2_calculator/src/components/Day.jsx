import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { get, reset as resetMemory, days } from '../store/storage'
import Layout from './Layout'

function Day() {
    const { dayId } = useParams()
    const [operations, setOperations] = useState([])
    const [reset, setReset] = useState(false)

    // le localForage est asynchrone on utilise une fonction anonyme async que l'on appelle directement dans le useEffect pour récupérer les données
    useEffect(() => {
        (async () => {
            const storage = await get(dayId)
            setOperations(storage)
        })()

    }, [dayId, reset])

    // idemn le resetMemory est asynchrone
    const handleReset = e => { (async () => { await resetMemory(dayId); setReset(true) })() }

    return (
        <Layout>
            <div className="bg-white p-8 rounded shadow-md">
                <div className="mb-4">
                    <p>Day : {days[dayId - 1]}</p>
                    <p>Status memory reset : {reset ? 'yes' : 'no'}</p>
                    <ul>
                        {operations.length > 0 && operations.map((o, i) => <li key={i}>{o}</li>)}
                    </ul>

                    <p><button onClick={handleReset}>Reset</button></p>
                </div>
            </div>
        </Layout>
    )
}

export default Day