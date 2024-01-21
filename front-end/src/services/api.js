// api.js
const baseUrl = "http://127.0.0.1:5555"; //Flask API URL

export const getRestaurants = async () => {
  const response = await fetch(`${baseUrl}/restaurants`);
  return response.json();
};

export const getRestaurantById = async (id) => {
  const response = await fetch(`${baseUrl}/restaurants/${id}`);
  return response.json();
};

export const getPizzas = async () => {
  const response = await fetch(`${baseUrl}/pizzas`);
  return response.json();
};

export const createRestaurantPizza = async (data) => {
  const response = await fetch(`${baseUrl}/restaurant_pizzas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors.join(', '));
  }

  return response.json();
};
