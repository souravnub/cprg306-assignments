import React from "react";
import { useGetIngredients } from "../api/data/useGetIngredients";
import { selectedMealName, selectedRecipeId } from "../recoil/meals/atom";
import { useRecoilValue } from "recoil";

const RecipeIngredients = () => {
    const recpieId = useRecoilValue(selectedRecipeId);
    const meal = useRecoilValue(selectedMealName);

    const { isError, isPending, data } = useGetIngredients(recpieId);

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
                    <li key={original}>{original}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeIngredients;
