import React from "react";
import Item from "./Item";

function sortByString(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

const ItemList = ({ items, sortBy = null }) => {
    if (sortBy === "seperate") {
        const categories = Array.from(
            new Set(items.map((item) => item.category))
        );
        const seperateByCategories = categories.map((category) => {
            let obj = { category, items: [] };

            items.forEach((item) => {
                if (item.category === category) {
                    obj.items.push(item);
                }
            });

            return obj;
        });

        return seperateByCategories.map(({ items, category }) => {
            return (
                <ul aria-label={category} key={category} className="mt-6">
                    <span className="capitalize font-medium">{category}</span>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <Item qty={item.quantity} {...item} />
                            </li>
                        ))}
                    </ul>
                </ul>
            );
        });
    }

    const sortedItems = items.sort((a, b) => {
        if (sortBy === "name") {
            return sortByString(a.name, b.name);
        } else if (sortBy === "category") {
            return sortByString(a.category, b.category);
        }
    });

    return (
        <ul>
            {(sortBy !== null && sortBy !== "seperate"
                ? items
                : sortedItems
            ).map((item) => (
                <li key={item.id || item.name}>
                    <Item qty={item.quantity} {...item} />
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
