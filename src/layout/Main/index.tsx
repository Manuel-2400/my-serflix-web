import React from "react";
import { MainProps } from "./types";

export function Main (props:MainProps) {
    const {children} = props;
    return (
        <div>
            {children}
        </div>
    )
}