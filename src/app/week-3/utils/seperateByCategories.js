export default function seperateByCategories(items) {
    const categories = Array.from(new Set(items.map((item) => item.category)));

    return categories.map((category) => {
        let obj = { category, items: [] };

        items.forEach((item) => {
            if (item.category === category) {
                obj.items.push(item);
            }
        });

        return obj;
    });
}
