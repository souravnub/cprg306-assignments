"use client";
import React, { useState } from "react";
import ItemList from "../week-3/ItemList";
import shoppingList from "./items.json";

const Week5 = () => {
    const [sortBy, setSortBy] = useState(null);

    function handleOptionChange(e) {
        setSortBy(e.target.value);
    }

    const inputs = ["name", "category", "seperate"];

    return (
        <main className="py-2">
            <h1 className="font-semibold text-2xl mb-4">Shopping List</h1>

            <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
                Sort By
            </h3>
            <ul class="items-center text-sm font-medium flex  w-min border border-gray-200 rounded-lg bg-slate-700">
                {inputs.map((input, idx) => (
                    <li key={input} class="border-gray-600">
                        <div class="flex items-center">
                            <input
                                id={input}
                                type="radio"
                                value={input}
                                name="sort"
                                class="hidden peer"
                                onChange={handleOptionChange}
                            />
                            <label
                                for={input}
                                class={`w-full px-4  py-3  text-sm font-medium  text-white peer-checked:bg-blue-500 cursor-pointer ${
                                    idx + 1 === inputs.length
                                        ? "rounded-r-lg"
                                        : "border-r"
                                } ${idx === 0 && "rounded-l-lg"}`}>
                                {input}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>

            <ItemList items={shoppingList} sortBy={sortBy} />
        </main>
    );
};

export default Week5;
