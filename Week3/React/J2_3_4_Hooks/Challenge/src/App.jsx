import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import Calculatrice from "./components/Calculatrice.jsx";
import Calculator from "./components/Calculator.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/challenge" element={<Calculatrice />} />
            </Routes>
        </Layout>

    );
}

export default App;