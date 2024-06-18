"use client";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";

export const useLogout = () => {
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error.message);
        }
    };

    return { logout };
};
