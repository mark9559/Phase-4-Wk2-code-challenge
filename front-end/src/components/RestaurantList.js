// RestaurantList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurants } from '../services/api';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

 
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error.message);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <Link to={`/restaurants/${restaurant.id}`}>
            <p>{restaurant.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
