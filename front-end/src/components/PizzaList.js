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
    <div>
      <h1>Pizzas</h1>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <p>{pizza.name}</p>
          <p>{pizza.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
