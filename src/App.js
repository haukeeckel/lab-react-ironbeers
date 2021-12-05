import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import BeerNavbar from './components/BeerNavbar';
import BeerLinks from './components/BeerLinks';
import BeerList from './components/BeerList';
import BeerDetailed from './components/BeerDetailed';
import NewBeer from './components/NewBeer';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== '/' ? <BeerNavbar /> : <BeerLinks />}
      <Routes>
        <Route path="/" />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:_id" element={<BeerDetailed />} />
        <Route path="/random-beer" element={<BeerDetailed />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}
export default App;
