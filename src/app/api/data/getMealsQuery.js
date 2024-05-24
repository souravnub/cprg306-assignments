import { getMeals } from "@/app/api/getMeals";
import { useQuery } from "@tanstack/react-query";

export const getMealsQuery = (query) => {
    return useQuery({
        queryKey: ["meals", query],
        queryFn: () => getMeals(query),
    });
};
