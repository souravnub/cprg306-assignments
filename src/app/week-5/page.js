"use client";
import React, { useState } from "react";
import ItemList from "../week-3/ItemList";
import shoppingList from "./items.json";

const Week5 = () => {
    const [sortBy, setSortBy] = useState(null);

    function handleOptionChange(e) {
        setSortBy(e.target.value);
    }

    return (
        <main className="py-2">
            <h1 className="font-semibold text-2xl mb-4">Shopping List</h1>

            <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
                Sort By
            </h3>
            <ul class="items-center text-sm font-medium flex  w-min border border-gray-200 rounded-lg bg-slate-700">
                <li class="border-gray-600">
                    <div class="flex items-center">
                        <input
                            id="name"
                            type="radio"
                            value="name"
                            name="sort"
                            class="hidden peer"
                            onChange={handleOptionChange}
                            aria-selected={sortBy === "name"}
                        />
                        <label
                            for="name"
                            class="w-full px-4 py-3  text-sm font-medium text-white peer-checked:bg-blue-500 rounded-l-lg">
                            name
                        </label>
                    </div>
                </li>

                <li class="border-l border-gray-200">
                    <div class="flex items-center">
                        <input
                            id="category"
                            type="radio"
                            value="category"
                            name="sort"
                            class="hidden peer"
                            onChange={handleOptionChange}
                            aria-selected={sortBy === "category"}
                        />
                        <label
                            for="category"
                            class="w-full px-4  py-3  text-sm font-medium  text-white peer-checked:bg-blue-500 ">
                            category
                        </label>
                    </div>
                </li>

                <li class="border-l border-gray-200">
                    <div class="flex items-center">
                        <input
                            id="seperate"
                            type="radio"
                            value="seperate"
                            name="sort"
                            class="hidden peer"
                            onChange={handleOptionChange}
                            aria-selected={sortBy === "seperate"}
                        />
                        <label
                            for="seperate"
                            class="w-full px-4  py-3  text-sm font-medium  text-white peer-checked:bg-blue-500 rounded-r-lg">
                            seperated
                        </label>
                    </div>
                </li>
            </ul>

            <ItemList items={shoppingList} sortBy={sortBy} />
        </main>
    );
};

export default Week5;
