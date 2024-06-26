import ItemList from "@/components/ItemList";
import shoppingList from "@/data/items.json";
import React from "react";

const Week3 = () => {
    return (
        <main className="py-2">
            <h1 className="font-semibold text-2xl mb-4">Shopping List</h1>
            <ItemList items={shoppingList} />
        </main>
    );
};

export default Week3;
