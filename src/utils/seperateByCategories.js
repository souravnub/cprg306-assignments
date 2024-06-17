import getCategories from "./getCategories";

export default function seperateByCategories(items) {
    return getCategories(items).map((category) => {
        let obj = { category, items: [] };

        items.forEach((item) => {
            if (item.category === category) {
                obj.items.push(item);
            }
        });

        return obj;
    });
}
