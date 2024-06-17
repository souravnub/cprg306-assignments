import React from "react";
import { getIngredientsQuery } from "../api/data/getIngredientsQuery";
import { selectedMealName, selectedRecipeId } from "../recoil/meals/atom";
import { useRecoilValue } from "recoil";

const RecipeIngredients = () => {
    const recpieId = useRecoilValue(selectedRecipeId);
    const meal = useRecoilValue(selectedMealName);

    const { isError, isPending, data } = getIngredientsQuery(recpieId);

    if (isPending) {
        return <>Loading..</>;
    }
    if (isError) {
        return <>Error while fetching data!</>;
    }

    return (
        <div>
            <h3 className="font-medium text-2xl mb-4">
                Ingredients needed for {meal}
            </h3>

            <ul>
                {data.extendedIngredients.map(({ original }) => (
                    <li>{original}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeIngredients;
