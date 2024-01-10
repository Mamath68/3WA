import './styles.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const root = document.getElementById('root');
const app = createRoot(root);
app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
