import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Challenge from './pages/Challenge';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/challenge" element={<Challenge />} />
            </Routes>
        </Layout>
    )
}

export default App