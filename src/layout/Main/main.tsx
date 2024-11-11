import React from "react";
import { MainProps } from "./types";
import { Header } from "./subComponents/Header/header";
import { Footer } from "./subComponents/Footer/footer";

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