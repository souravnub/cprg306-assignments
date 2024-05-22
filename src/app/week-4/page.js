"use client";

import React from "react";
import NewItem from "./NewItem";
import getCategories from "../utils/getCategories";
import data from "../data/items.json";

const Page = () => {
    function handleSubmit(e, item, clear) {
        e.preventDefault();
        console.log(item);
        window.alert(JSON.stringify(item));
        clear();
    }

    return (
        <div>
            <NewItem
                categories={getCategories(data)}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Page;
