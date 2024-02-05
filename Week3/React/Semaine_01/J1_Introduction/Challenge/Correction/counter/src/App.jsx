import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Counter from './Pages/Counter'
import Number from './Pages/Number'
import Layout from './Components/Layout'

function App() {
    return (
            <Layout>
                <Routes>
                    <Route path="/" element={<Counter />} />
                    <Route path="/numbers" element={<Number />} />
                </Routes>
            </Layout>
    )
}

export default App