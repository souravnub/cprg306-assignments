"use client";
import React, { useState } from "react";
import shoppingList from "../week-3/data.js";

const NewItem = () => {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    const [qty, setQty] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(e) {
        e.preventDefault();
        const item = { icon, qty, name, category };
        console.log(item);
        window.alert(JSON.stringify(item));

        setName("");
        setIcon("");
        setQty(1);
        setCategory("produce");
    }

    function genIcon() {
        setIcon((prev) => prev + "🍊");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-lg">
            <div>
                <label className="text-xs" for="icon">
                    Icon
                </label>
                <input
                    className="w-full"
                    id="icon"
                    type="text"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                />
                <button
                    type="button"
                    className="text-sm bg-green-600 px-2 py-1 rounded-md mt-1"
                    onClick={genIcon}>
                    generate icon
                </button>
            </div>

            <div>
                <label className="text-xs" for="name">
                    Name
                </label>
                <input
                    required
                    className="w-full"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label className="text-xs" for="qty">
                    Quantity
                </label>
                <input
                    min={1}
                    max={99}
                    className="w-full"
                    id="qty"
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                />
            </div>

            <div>
                <label className="text-xs" for="category">
                    Category
                </label>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full">
                    {shoppingList.map(({ category: ct }) => {
                        return (
                            <option
                                key={ct}
                                selected={category === ct}
                                value={ct}>
                                {ct}
                            </option>
                        );
                    })}
                    <option value="other">other</option>
                </select>
            </div>

            <button className="max-w-fit px-4 py-2 rounded-md bg-neutral-200 mt-4 dark:bg-neutral-800">
                Submit
            </button>
        </form>
    );
};

export default NewItem;
