import React, { useState,Fragment } from "react";
import { AvailableMeals } from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export const Meals = () => {
  const [mealSummery,setMealSummery] = useState(true);

  
  return (
    <Fragment>
     {mealSummery && <MealsSummary onChangeHandleSummery={setMealSummery}/>}
      <AvailableMeals />
    </Fragment>
  );
};
