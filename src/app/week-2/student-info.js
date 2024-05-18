import Link from "next/link";
import React from "react";
import { cn } from "../lib/utils";

const StudentInfo = ({ name, github, className }) => {
    const baseClasses =
        "flex flex-col p-5 py-2  gap-1 rounded-md  dark:bg-slate-900 light:bg-neutral-100 max-w-fit";
    return (
        <div className={cn(baseClasses, className)}>
            <span>{name}</span>

            <span>
                Github:{" "}
                <Link
                    href={github}
                    target="_blank"
                    className="text-blue-400 hover:underline">
                    {github}
                </Link>
            </span>
        </div>
    );
};

export default StudentInfo;
