"use client";
import useAuth from "@/hooks/useAuth";
import { useLogin } from "@/hooks/useGithubLogin";
import { useLogout } from "@/hooks/useGithubLogout";
import Link from "next/link";
import React from "react";

const Week8 = () => {
    const { login, isPending } = useLogin();
    const { logout } = useLogout();
    const { isAuthReady, user } = useAuth();

    if (!isAuthReady) {
        return <p>Getting Auth info</p>;
    }

    if (!user) {
        return (
            <div>
                {isPending ? (
                    "loading..."
                ) : (
                    <div className="space-y-3">
                        <h1 className="font-semibold text-xl">Not logged in</h1>
                        <button
                            onClick={login}
                            disabled={isPending}
                            className="bg-green-600 p-3 rounded-md">
                            Login with github
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div>
            <div className="space-y-3">
                <h1 className="font-semibold text-xl">logged in as:</h1>

                <div className="bg-slate-800 w-fit p-3 rounded-md">
                    <img
                        src={user.photoURL}
                        className="max-w-9 rounded-full inline-block mr-4"
                        alt=""
                    />
                    <span>{user.email}</span>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={logout}
                        className="bg-red-500 py-2 px-4 rounded-md">
                        Log out
                    </button>
                    <Link
                        href="/week-8/shopping-list"
                        className="bg-green-600 py-2 px-4 rounded-md">
                        Shopping List
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Week8;
