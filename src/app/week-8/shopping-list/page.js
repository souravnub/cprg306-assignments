"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Week8ShoppingList = () => {
    const { user, isAuthReady } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthReady && !user) {
            router.push("/week-8");
        }
    }, [isAuthReady, user]);

    return (
        <div>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Week8ShoppingList;
