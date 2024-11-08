import React from "react";
import { MainProps } from "./types";
import { Header } from "../Header";
import { Footer } from "../Footer";


export function Main (props:MainProps) {
    const {children} = props;
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}