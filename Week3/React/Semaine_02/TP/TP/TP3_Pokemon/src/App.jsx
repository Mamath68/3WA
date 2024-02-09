// App.js
import React from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SameTypePokemons from './components/SameTypePokemons';
import TypeList from './components/TypeList';
import TypeDetail from './components/TypeDetail';
import AbilityDetail from './components/AbilityDetail';
import AbilityList from './components/AbilityList';
import Layout from './components/Layout';

const App = () => {
  const pokemonNames = [
    "Pikachu",
    "Charizard",
    "Bulbasaur",
    "Squirtle",
    "Jigglypuff",
    "Meowth",
    "Eevee",
    "Snorlax",
    "Mewtwo",
    "Gyarados"
  ];

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<PokemonList pokemonNames={pokemonNames} />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/pokemon/type/:type" element={<SameTypePokemons />} />
          <Route path="/types" element={<TypeList />} />
          <Route path="/type/:type" element={<TypeDetail />} />
          <Route path="/abilities" element={<AbilityList />} />
          <Route path="/ability/:ability" element={<AbilityDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
