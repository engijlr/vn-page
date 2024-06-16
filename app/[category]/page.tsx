import Badge from "@/components/Badge";
import MealCard from "@/components/MealCard";
import { CATEGORIES, MEALS } from "@/constants";
import React from "react";

function page({ params }: { params: { category: string } }) {
  return (
    <div className="px-6 lg:px-12 py-20">
      <h2 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {params.category}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {CATEGORIES.map((item) => (
          <Badge
            key={item.type}
            name={item.type}
            href={item.href}
            backgroundColor={item.background}
            color={item.color}
          />
        ))}
      </div>

      <ul className="mt-20 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MEALS.map((meal) => (
          <MealCard meal={meal} key={meal.mealId} />
        ))}
      </ul>
    </div>
  );
}

export default page;
