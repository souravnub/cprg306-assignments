import React from "react";

const Item = ({ icon, name, quantity, category }) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b  border-gray-200 dark:bg-gray-950 dark:border-gray-800">
            <div className="flex items-center space-x-4">
                <div className="grid place-content-center text-2xl  w-[48px] aspect-square rounded-md dark:bg-slate-900 light:bg-neutral-100">
                    {icon}
                </div>

                <div className="space-y-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-50">
                        {name}
                    </h3>
                    <div className="flex items-center text-xs space-x-1">
                        <p className="text-gray-500 dark:text-gray-400">
                            Quantity: {quantity}
                        </p>
                        <span className="text-gray-400 dark:text-gray-500">
                            |
                        </span>
                        <p className="text-gray-500 dark:text-gray-400">
                            Category: {category}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
