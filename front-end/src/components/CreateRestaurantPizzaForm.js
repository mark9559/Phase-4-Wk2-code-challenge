// CreateRestaurantPizzaForm.js
import React, { useState } from 'react';
import { createRestaurantPizza } from '../services/api';

const CreateRestaurantPizzaForm = () => {
  const [formData, setFormData] = useState({
    price: '',
    pizza_id: '',
    restaurant_id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createRestaurantPizza(formData);
      console.log('RestaurantPizza created:', response);
      // Handle success, e.g., redirect or display a success message
    } catch (error) {
      console.error('Error creating RestaurantPizza:', error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Create Restaurant Pizza</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Pizza ID:
          <input
            type="number"
            name="pizza_id"
            value={formData.pizza_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Restaurant ID:
          <input
            type="number"
            name="restaurant_id"
            value={formData.restaurant_id}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Restaurant Pizza</button>
      </form>
    </div>
  );
};

export default CreateRestaurantPizzaForm;
