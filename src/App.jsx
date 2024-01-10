import Counter from "./Components/Challenge1/Counter.jsx";
import Home from "./Components/Home.jsx";
import TableDelay from "./Components/Challenge2/TableDelay.jsx";
import Shuffle from "./Components/Challenge3/Shuffle.jsx";

import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout.jsx";

export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/challenge/1" element={<Counter />} />
                    <Route path="/challenge/2" element={<TableDelay />} />
                    <Route path="/challenge/3" element={<Shuffle />} />
                </Routes>
            </Layout>
        </>
    );
}