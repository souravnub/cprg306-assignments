import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../getMeals";

export const getMealsQuery = (query) => {
    return useQuery({
        queryKey: ["meals", query],
        queryFn: () => getMeals(query),
    });
};
