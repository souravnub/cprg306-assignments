import React from "react";
import Item from "./Item";
import seperateByCategories from "../utils/seperateByCategories";
import sortItems from "../utils/sortItems";

const ItemList = ({ items, sortBy = null }) => {
    if (items.length === 0) {
        return <p className="font-bold text-xl mt-2">No items to display</p>;
    }

    if (sortBy === "seperate") {
        return seperateByCategories(items).map(({ items, category }) => {
            return (
                <ul aria-label={category} key={category} className="mt-6">
                    <span className="capitalize font-medium">{category}</span>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <Item {...item} />
                            </li>
                        ))}
                    </ul>
                </ul>
            );
        });
    }

    if (sortBy === "name" || sortBy === "category") {
        return (
            <ul>
                {sortItems(items, sortBy).map((item) => (
                    <li key={item.id || item.name}>
                        <Item {...item} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id || item.name}>
                    <Item {...item} />
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
