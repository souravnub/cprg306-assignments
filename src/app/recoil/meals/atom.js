import { atom } from "recoil";

const selectedMealName = atom({
    key: "selectedMeal",
    default: null,
});

const selectedRecipeId = atom({
    key: "selectedRecipeId",
    default: null,
});

export { selectedMealName, selectedRecipeId };
