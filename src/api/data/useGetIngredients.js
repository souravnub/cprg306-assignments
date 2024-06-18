import { useQuery } from "@tanstack/react-query";
import { getIngredients } from "../getIngredients";

export const useGetIngredients = (recipeId) => {
    return useQuery({
        queryKey: ["ingredients", recipeId],
        queryFn: () => getIngredients(recipeId),
    });
};
