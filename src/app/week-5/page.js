"use client";
import React, { useState } from "react";
import ItemList from "../components/ItemList";
import shoppingList from "../data/items.json";
import RadioGroup from "../components/RadioGroup";

const Week5 = () => {
    const [sortBy, setSortBy] = useState(null);

    function handleOptionChange(e) {
        setSortBy(e.target.value);
    }

    const inputs = ["name", "category", "seperate"];

    return (
        <main className="py-2">
            <h1 className="font-semibold text-2xl mb-4">Shopping List</h1>

            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Sort By
            </h3>
            <RadioGroup
                inputs={inputs}
                handleOptionChange={handleOptionChange}
            />
            <ItemList items={shoppingList} sortBy={sortBy} />
        </main>
    );
};

export default Week5;
