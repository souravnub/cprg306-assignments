export const getMeals = async (query) => {
    const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
    );
    const data = await res.json();
    return data;
};
