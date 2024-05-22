"use client";
import React, { useState } from "react";
import NewItem from "../week-4/NewItem";
import data from "../data/items.json";
import RadioGroup from "../components/RadioGroup";
import ItemList from "../week-3/ItemList";
import getCategories from "../utils/getCategories";

const Week6 = () => {
    const [list, setList] = useState(data);
    const [sortBy, setSortBy] = useState(null);

    const handleSubmit = (e, itemSubmitted, clear) => {
        e.preventDefault();
        setList((prev) => [...prev, itemSubmitted]);
        clear();
    };
    const handleOptionChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div>
            <NewItem
                categories={getCategories(data)}
                handleSubmit={handleSubmit}
            />
            <div className="mt-10">
                <RadioGroup
                    inputs={["name", "category", "seperate"]}
                    handleOptionChange={handleOptionChange}
                />
                <ItemList items={list} sortBy={sortBy} />
            </div>
        </div>
    );
};

export default Week6;
