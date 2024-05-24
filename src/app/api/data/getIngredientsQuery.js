import { getIngredients } from "@/app/api/getIngredients";
import { useQuery } from "@tanstack/react-query";

export const getIngredientsQuery = (recipeId) => {
    return useQuery({
        queryKey: ["ingredients", recipeId],
        queryFn: () => getIngredients(recipeId),
    });
};
