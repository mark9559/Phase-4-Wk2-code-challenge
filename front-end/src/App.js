// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import PizzaList from './components/PizzaList';
import CreateRestaurantPizzaForm from './components/CreateRestaurantPizzaForm';
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/pizzas" element={<PizzaList />} />
        <Route path="/create-restaurant-pizza" element={<CreateRestaurantPizzaForm />} />
      </Routes>
    </Router>
  );
};

export default App;
