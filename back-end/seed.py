#!/usr/bin/env python3


from app import app, db
from models import Restaurant, Pizza, RestaurantPizza

def seed_data():
    #app = create_app()  # Replace with the actual function to create your Flask app
    with app.app_context():
        db.create_all()
        print("🍕 Seeding restaurants...")

        restaurants_data = [
            {"name": "Sottocasa NYC", "address": "298 Atlantic Ave, Brooklyn, NY 11201"},
            {"name": "PizzArte", "address": "69 W 55th St, New York, NY 10019"},
            {"name": "Pizza Inn", "address": "388 Kimathi Street, Nairobi, Kenya"},
            {"name": "Ole Sereni", "address": "456 Southern Bypass, Nairobi, Kenya"},
            {"name": "Big Square", "address": "178 University Way, Nairobi, Kenya"},
            {"name": "Villa Rosa", "address": "946 Westlands, Nairobi, Kenya"},
            {"name": "Panari", "address": "879 Msa Road, Nairobi, Kenya"},
            {"name": "Inter-Continental", "address": "456 ABC Street, Nairobi, Kenya"},
            {"name": "Raddison Blue", "address": "383 Upperhill, Nairobi, Kenya"},
            {"name": "Kibandaski", "address": "875 Ngong Road, Nairobi, Kenya"},
            {"name": "Movenpick", "address": "785 Westlands, Nairobi, Kenya"}
        ]

        for data in restaurants_data:
            restaurant = Restaurant(**data)
            db.session.add(restaurant)

        db.session.commit()

        print("🍕 Seeding pizzas...")
        pizzas_data = [
            {"name": "Chicken", "ingredients": "Dough, Tomato Sauce, Cheese, Chicken, Pineapples"},
            {"name": "Pepperoni", "ingredients": "Dough, Tomato Sauce, Cheese, Pepperoni"},
            {"name": "Vegetarian", "ingredients": "Dough, Tomato Sauce, Cheese, Mushrooms, Bell Peppers"},
            {"name": "Margherita", "ingredients": "Dough, Tomato Sauce, Fresh Mozzarella, Basil"},
            {"name": "Toluka", "ingredients": "Dough, White Sauce, Cheese, Pork, Mozzarella"},
            {"name": "Prosciutto", "ingredients": "Dough, White Sauce, Cheese, Fig, Caramelized Onion"}
        ]

        for data in pizzas_data:
            pizza = Pizza(**data)
            db.session.add(pizza)

        db.session.commit()

        print("🍕 Seeding restaurant pizzas...")
        restaurant_pizzas_data = [
            {"price": 10.0, "restaurant_name": "Sottocasa NYC", "pizza_name": "Chicken"},
            {"price": 15.0, "restaurant_name": "Sottocasa NYC", "pizza_name": "Pepperoni"},
            {"price": 12.0, "restaurant_name": "PizzArte", "pizza_name": "Pepperoni"},
            {"price": 8.0, "restaurant_name": "Pizza Inn", "pizza_name": "Vegetarian"},
            {"price": 13.0, "restaurant_name": "Ole Sereni", "pizza_name": "Margherita"},
            {"price": 11.0, "restaurant_name": "Big Square", "pizza_name": "Toluka"},
            {"price": 14.0, "restaurant_name": "Villa Rosa", "pizza_name": "Prosciutto"},
            {"price": 9.0, "restaurant_name": "Panari", "pizza_name": "Chicken"},
            {"price": 16.0, "restaurant_name": "Inter-Continental", "pizza_name": "Pepperoni"},
            {"price": 10.0, "restaurant_name": "Raddison Blue", "pizza_name": "Vegetarian"},
            {"price": 12.0, "restaurant_name": "Kibandaski", "pizza_name": "Margherita"},
            {"price": 15.0, "restaurant_name": "Movenpick", "pizza_name": "Toluka"}
        ]

        for data in restaurant_pizzas_data:
            restaurant_name = data.pop("restaurant_name")
            pizza_name = data.pop("pizza_name")

            restaurant = Restaurant.query.filter_by(name=restaurant_name).first()
            pizza = Pizza.query.filter_by(name=pizza_name).first()

            if restaurant and pizza:
                restaurant_pizza = RestaurantPizza(restaurant=restaurant, pizza=pizza, **data)
                db.session.add(restaurant_pizza)

        db.session.commit()

if __name__ == '__main__':
    seed_data()
