"use client";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedMealName, selectedRecipeId } from "../recoil/meals/atom";
import { useGetMeals } from "../api/data/useGetMeals";

const MealIdeas = () => {
    const selectedIngredient = useRecoilValue(selectedMealName);
    const setRecpieId = useSetRecoilState(selectedRecipeId);
    const { isError, isPending, data } = useGetMeals(selectedIngredient);

    if (isPending) {
        return <>Loading..</>;
    }
    if (isError) {
        return <>Error while fetching data!</>;
    }

    if (data.status === "failure") {
        return <>{data.message}</>;
    }

    return (
        <div>
            <h2 className="font-medium text-2xl mb-4">
                Meal Ideas for {selectedIngredient}
            </h2>

            {data.totalResults === 0 && <span> No results found!</span>}
            <ul className="space-y-3">
                {data.results.map((meal) => (
                    <li key={meal.id} className="block">
                        <button
                            onClick={() => setRecpieId(meal.id)}
                            className="px-3 py-2 bg-neutral-800 rounded-lg w-full text-start hover:bg-neutral-700">
                            {meal.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
