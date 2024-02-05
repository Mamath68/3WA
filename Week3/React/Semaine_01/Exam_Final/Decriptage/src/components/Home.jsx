import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className='text-red-500 text-center'>Bienvene à tous</h1>
            <Link to='/decriptage' className='text-blue-500 text-3l text-center'>Passez sur la page suivante et amusez vous a craquer des codes.</Link>
        </>
    )
}

export default Home