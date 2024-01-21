// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pizzas">Pizzas</Link></li>
        <li><Link to="/create-restaurant-pizza">Create Restaurant Pizza</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
