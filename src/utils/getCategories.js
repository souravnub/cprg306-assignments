function getCategories(items) {
    const categories = Array.from(new Set(items.map((item) => item.category)));
    return categories;
}
export default getCategories;
