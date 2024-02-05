import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import Home from './components/Home.jsx';
import Decriptage from './components/Decriptage.jsx';
import './App.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/decriptage" element={<Decriptage />} />
            </Routes>
        </Layout>

    );
}

export default App;