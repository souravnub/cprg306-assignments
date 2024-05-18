import React from "react";
import Item from "./Item";

export const shoppingList = [
    {
        name: "milk, 4 L",
        quantity: 1,
        category: "dairy",
        icon: "🥛",
    },
    {
        name: "bread",
        quantity: 2,
        category: "bakery",
        icon: "🍞",
    },
    {
        name: "eggs, dozen",
        quantity: 2,
        category: "dairy",
        icon: "🥚",
    },
    {
        name: "bananas",
        quantity: 6,
        category: "produce",
        icon: "🍌",
    },
    {
        name: "broccoli",
        quantity: 3,
        category: "produce",
        icon: "🥦",
    },
    {
        name: "chicken breasts, 1 kg",
        quantity: 1,
        category: "meat",
        icon: "🍗",
    },
    {
        name: "pasta sauce",
        quantity: 3,
        category: "canned goods",
        icon: "🍝",
    },
    {
        name: "spaghetti, 454 g",
        quantity: 2,
        category: "dry goods",
        icon: "🍝",
    },
    {
        name: "toilet paper, 12 pack",
        quantity: 1,
        category: "household",
        icon: "🧻",
    },
    {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
        icon: "📄",
    },
    {
        name: "dish soap",
        quantity: 1,
        category: "household",
        icon: "🍽️",
    },
    {
        name: "hand soap",
        quantity: 4,
        category: "household",
        icon: "🧼",
    },
];

const ItemList = () => {
    return (
        <ul>
            {shoppingList.map((item) => (
                <li key={item.name}>
                    <Item qty={item.quantity} {...item} />
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
