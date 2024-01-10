import { Counter } from "./Components/Counter";
import { Home } from "./Components/Home";
import { Nav } from "./Components/Nav";
import { TableDelay } from "./Components/TableDelay";
import { Shuffle } from './Components/Shuffle.js';

import { Routes, Route } from 'react-router-dom'

export function App() {
    return (
        <div className="main">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/challenge/1" element={<Counter />} />
                <Route path="/challenge/2" element={<TableDelay />} />
                <Route path="/challenge/3" element={<Shuffle />} />
            </Routes>
        </div>
    );
}