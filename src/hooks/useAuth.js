import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthReady(true);
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return { user, isAuthReady };
};
export default useAuth;
