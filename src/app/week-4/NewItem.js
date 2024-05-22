"use client";
import React, { useState } from "react";

const NewItem = ({ categories, handleSubmit }) => {
    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function genIcon() {
        setIcon("🍊");
    }

    function clear() {
        setIcon("");
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form
            onSubmit={(e) =>
                handleSubmit(e, { icon, name, quantity, category }, clear)
            }
            className="flex flex-col gap-3 max-w-lg">
            <div>
                <label className="text-xs" htmlFor="icon">
                    Icon
                </label>
                <input
                    className="w-full"
                    id="icon"
                    type="text"
                    value={icon}
                    maxLength={1}
                    onChange={(e) => {
                        setIcon(e.target.value);
                    }}
                />
                <button
                    type="button"
                    className="text-sm bg-green-600 px-2 py-1 rounded-md mt-1"
                    onClick={genIcon}>
                    generate icon
                </button>
            </div>

            <div>
                <label className="text-xs" htmlFor="itemName">
                    Name
                </label>
                <input
                    required
                    className="w-full"
                    id="itemName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label className="text-xs" htmlFor="qty">
                    Quantity
                </label>
                <input
                    min={1}
                    max={99}
                    className="w-full"
                    id="qty"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <div>
                <label className="text-xs" htmlFor="category">
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full">
                    {categories.map((ct = category) => {
                        return (
                            <option key={ct} value={ct}>
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
