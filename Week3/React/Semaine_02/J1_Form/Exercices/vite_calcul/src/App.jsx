import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import FormCalcul from "./components/FormCalcul";
import FormCalculReducer from "./components/FormCalculReducer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/numberCalcul" element={<FormCalcul />} />
            <Route path="/numberCalculReducer" element={<FormCalculReducer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
