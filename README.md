# Phase-4-Wk2-code-challenge

This repository contains the  code challenge for Phase 4, Week 2 - Pizza Restaurants.

## Author

 - By Mark Mwangi

 - Date: 17/01/2024

## Project Description

### Flask Code Challenge - Pizza Restaurants

For this assessment, I'll be working with a Pizza Restaurant domain.

The job is to to come up with a fully built React frontend application, so that I can test if my API is working.

I will also build out the Flask API to add the functionality described in the deliverables below.

### Models

You need to create the following relationships:

- A `Restaurant` has many `Pizza`s through `RestaurantPizza`.
- A `Pizza` has many `Restaurant`s through `RestaurantPizza`.
- A `RestaurantPizza` belongs to a `Restaurant` and belongs to a `Pizza`.

### Validations

Add validations to the `RestaurantPizza` model:

- must have a `price` between 1 and 30.

### Routes

Set up the following routes. Make sure to return JSON data in the format specified along with the appropriate HTTP verb.

#### GET /restaurants:

Return JSON data in the format below:

```json
[
  {
    "id": 1,
    "name": "Sottocasa NYC",
    "address": "298 Atlantic Ave, Brooklyn, NY 11201"
  },
  {
    "id": 2,
    "name": "PizzArte",
    "address": "69 W 55th St, New York, NY 10019"
  }
]
```

#### GET /restaurants/:id:

If the `Restaurant` exists, return JSON data in the format below:

```json
{
  "id": 1,
  "name": "Sottocasa NYC",
  "address": "298 Atlantic Ave, Brooklyn, NY 11201",
  "pizzas": [
    {
      "id": 1,
      "name": "Cheese",
      "ingredients": "Dough, Tomato Sauce, Cheese"
    },
    {
      "id": 2,
      "name": "Pepperoni",
      "ingredients": "Dough, Tomato Sauce, Cheese, Pepperoni"
    }
  ]
}
```

If the `Restaurant` does not exist, return the following JSON data, along with the appropriate HTTP status code:

```json
{
  "error": "Restaurant not found"
}
```

#### DELETE /restaurants/:id:

If the `Restaurant` exists, it should be removed from the database, along with any `RestaurantPizza`s that are associated with it (a `RestaurantPizza` belongs to a `Restaurant`, so you need to delete the `RestaurantPizza`s before the `Restaurant` can be deleted).

After deleting the `Restaurant`, return an _empty_ response body, along with the appropriate HTTP status code.

If the `Restaurant` does not exist, return the following JSON data, along with the appropriate HTTP status code:

```json
{
  "error": "Restaurant not found"
}
```

#### GET /pizzas:

Return JSON data in the format below:

```json
[
  {
    "id": 1,
    "name": "Cheese",
    "ingredients": "Dough, Tomato Sauce, Cheese"
  },
  {
    "id": 2,
    "name": "Pepperoni",
    "ingredients": "Dough, Tomato Sauce, Cheese, Pepperoni"
  }
]
```

#### POST /restaurant_pizzas:

This route should create a new `RestaurantPizza` that is associated with an existing `Pizza` and `Restaurant`. It should accept an object with the following properties in the body of the request:

```json
{
  "price": 5,
  "pizza_id": 1,
  "restaurant_id": 3
}
```

If the `RestaurantPizza` is created successfully, send back a response with the data related to the `Pizza`:

```json
{
  "id": 1,
  "name": "Cheese",
  "ingredients": "Dough, Tomato Sauce, Cheese"
}
```

If the `RestaurantPizza` is **not** created successfully, return the following JSON data, along with the appropriate HTTP status code:

```json
{
  "errors": ["validation errors"]
}
```

## Setup/Installation Requirements

1. Clone the repository to any desired folder in your computer.
2. Open the folder with Visual Studio Code or any editor of your choice.
3. There are two folders in the root directory, the `back-end` folder and the `front-end` folder.
4. To download the dependencies for the frontend run:

```sh
npm install 
```
5. To download the dependencies for the backend, run:

```sh
pipenv install && pipenv shell 
```

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by navigating to the `back-end` folder and run:

```sh
python3 app.py
```

You can run your React app on [`localhost:4000`](http://localhost:4000) using a separate terminal by navigating to the `front-end` folder and run:

```sh
npm start
```

6. And your application is up and running successfully.

## Known Bugs

The Pizza Restaurants app works fine.

## Technologies Used

 - HTML & CSS
 - React JS
 - Python
 - Flask
 - Terminal

## Support and contact details

 - Email :: mark.mwangi1@student.moringaschool.com
 - Phone :: +254770614345

## License

MIT License

Copyright (c) 2024 Mark Mwangi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.```