"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import ItemList from "@/components/ItemList";
import data from "@/data/items.json";
import getCategories from "@/utils/getCategories";
import NewItem from "@/components/NewItem";
import RadioGroup from "@/components/RadioGroup";
import MealIdeas from "@/components/MealIdeas";
import RecipeIngredients from "@/components/RecipeIngredients";
import { useRecoilValue } from "recoil";
import { selectedMealName, selectedRecipeId } from "@/recoil/meals/atom";

async function getItems(userId) {
    const snap = await getDocs(collection(db, "users", userId, "items"));
    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}

const Week9ShoppingList = () => {
    const selectedIngredient = useRecoilValue(selectedMealName);
    const selectedRecipe = useRecoilValue(selectedRecipeId);
    const { user, isAuthReady } = useAuth();

    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState(null);

    const [isItemsLoading, setIsItemsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (isAuthReady && !user) {
            router.push("/week-9");
        }

        async function init() {
            setIsItemsLoading(true);
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
            setIsItemsLoading(false);
        }

        if (user) {
            init();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthReady, user]);

    const handleSubmit = async (e, itemSubmitted, clear) => {
        e.preventDefault();
        setIsItemsLoading(true);
        const docRef = await addDoc(
            collection(db, "users", user.uid, "items"),

            itemSubmitted
        );
        const newItems = await getItems(user.uid);
        setItems(newItems);
        setIsItemsLoading(false);

        clear();
    };
    const handleOptionChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="container py-3">
            {user && (
                <Image
                    height={40}
                    width={40}
                    src={user.photoURL}
                    alt=""
                    className="rounded-full fixed right-4 top-4"
                />
            )}

            <div className="flex gap-4 flex-wrap">
                <NewItem
                    categories={getCategories(data)}
                    handleSubmit={handleSubmit}
                />

                <div className="flex gap-4 flex-wrap">
                    <div>
                        <RadioGroup
                            inputs={["name", "category", "seperate"]}
                            handleOptionChange={handleOptionChange}
                        />

                        {isItemsLoading ? (
                            "...loading items"
                        ) : (
                            <ItemList items={items} sortBy={sortBy} />
                        )}
                    </div>
                    {selectedIngredient && <MealIdeas />}
                    {selectedRecipe && <RecipeIngredients />}
                </div>
            </div>
        </div>
    );
};

export default Week9ShoppingList;
