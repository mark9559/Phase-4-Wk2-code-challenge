// RestaurantDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/api';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await getRestaurantById(id);
      setRestaurant(data);
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="restaurant-detail">
      <h1>{restaurant.name}</h1>
      <p className="address">{restaurant.address}</p>
      <h2>Available Pizzas</h2>
      {restaurant.pizzas.length === 0 ? (
        <p>No pizzas available</p>
      ) : (
        <ul className="pizza-list">
          {restaurant.pizzas.map((pizza) => (
            <li key={pizza.id}>
              <p className="pizza-name">{pizza.name}</p>
              <p className="pizza-ingredients">{pizza.ingredients}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantDetail;
