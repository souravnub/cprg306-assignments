import React from "react";

const RadioGroup = ({ inputs, handleOptionChange }) => {
    return (
        <ul className="items-center text-sm font-medium flex  w-min border border-gray-200 rounded-lg bg-slate-700">
            {inputs.map((input, idx) => (
                <li key={input} className="border-gray-600">
                    <div className="flex items-center">
                        <input
                            id={input}
                            type="radio"
                            value={input}
                            name="sort"
                            className="hidden peer"
                            onChange={handleOptionChange}
                        />
                        <label
                            htmlFor={input}
                            className={`w-full px-4  py-3  text-sm font-medium  text-white peer-checked:bg-blue-500 cursor-pointer ${
                                idx + 1 === inputs.length
                                    ? "rounded-r-lg"
                                    : "border-r"
                            } ${idx === 0 && "rounded-l-lg"}`}>
                            {input}
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default RadioGroup;
