"use client";

import React from "react";
import MealIdeas from "../components/MealIdeas";
import { selectedMealName, selectedRecipeId } from "../recoil/meals/atom";
import { useRecoilValue } from "recoil";
import Week6 from "../week-6/page";
import RecipeIngredients from "../components/RecipeIngredients";

const Week7 = () => {
    const selectedIngredient = useRecoilValue(selectedMealName);
    const selectedRecipe = useRecoilValue(selectedRecipeId);

    return (
        <div className="flex gap-10">
            <Week6 />
            {selectedIngredient && <MealIdeas />}
            {selectedRecipe && <RecipeIngredients />}
        </div>
    );
};

export default Week7;
