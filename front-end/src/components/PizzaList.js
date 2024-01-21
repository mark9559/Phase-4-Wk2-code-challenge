// PizzaList.js
import React, { useEffect, useState } from 'react';
import { getPizzas } from '../services/api';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const data = await getPizzas();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error.message);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="pizza-list">
      <div className="pizza-list-header">
        <h1>Pizza Menu</h1>
      </div>
      {pizzas.map((pizza) => (
        <div className="pizza-card" key={pizza.id}>
          <div className="card">
            <h2>{pizza.name}</h2>
            <h3>Ingredients</h3>
            <p className='pizza-para'>{pizza.ingredients}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
