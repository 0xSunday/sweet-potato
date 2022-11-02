import React from "react";
import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Paradise Biryani",
    price: 200,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "A german specialty!",
    price: 300,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, raw, meaty",
    price: 150,
  },
  {
    id: "m4",
    name: "Noodles",
    description: "Special chinese",
    price: 60,
  },
];
export const AvailableMeals = () => {
  const mealsData = DUMMY_MEALS.map((meals) => (
    <MealItem
      id={meals.id}
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealsData}</ul>
      </Card>
    </section>
  );
};
