export const getIngredients = async (recipeId) => {
    const res = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    return data;
};
