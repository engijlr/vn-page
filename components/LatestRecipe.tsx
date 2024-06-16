import { MEALS } from "@/constants";
import React from "react";
import MealCard from "./MealCard";
import Button from "./Button";
import Link from "next/link";

function LatestRecipe() {
  return (
    <div className="px-5 xl:px-10 py-16">
      <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest Recipes
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MEALS ? (
          MEALS.slice(0, 4).map((meal) => (
            <MealCard meal={meal} key={meal.mealId} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Link href="#">
        <div className="sm:w-64 mx-auto mt-16">
          <Button title="View All Recipes" type="button" />
        </div>
      </Link>
    </div>
  );
}

export default LatestRecipe;
