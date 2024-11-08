import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MainProps } from "./types";


export function Main(props: MainProps) {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}