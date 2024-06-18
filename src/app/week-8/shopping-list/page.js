"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Week8ShoppingList = () => {
    const { user, isAuthReady } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthReady && !user) {
            router.push("/week-8");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthReady, user]);

    return (
        <div>
            <Image height={36} width={36} src={user?.photoURL} alt="" />
        </div>
    );
};

export default Week8ShoppingList;
