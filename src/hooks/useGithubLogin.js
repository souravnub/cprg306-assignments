"use client";

import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/utils/firebase";

export const useLogin = () => {
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const provider = new GithubAuthProvider();

    const login = async () => {
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error("Could not complete signup");
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        }

        setIsPending(false);
    };

    return { login, error, isPending };
};
