"use client";

import React from "react";
import { RecoilRoot } from "recoil";

const RecoilProvider = ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
