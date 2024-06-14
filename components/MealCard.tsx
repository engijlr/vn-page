import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoClock } from "react-icons/go";

function MealCard({ meal }: { meal: meal }) {
  return (
    <li className="container mx-auto flex justify-center md:justify-start">
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <Image
            src={meal.thumbnail_image}
            alt={meal.name}
            width={1280}
            height={720}
            className="rounded-t-lg"
          />
          <div className="py-6 px-5 rounded-lg bg-white">
            <Link href="#">
              <p className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:shadow-lg transition duration-300">
                {meal.name}
              </p>
            </Link>

            <div className="flex items-center justify-end py-2 mt-6 gap-2">
              <GoClock />
              <span>{meal.prep_time}</span>
            </div>
          </div>

          <div className="absolute top-2 right-2 py-2 px-2 bg-white rounded-lg">
            <span className="font-medium">{meal.difficulty}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MealCard;
