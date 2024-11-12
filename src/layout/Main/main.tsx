import React from "react";
import { MainProps } from "./types";
import { Header } from "./subComponents/Header/header";
import { Footer } from "./subComponents/Footer/footer";
import './main.css'

export function Main(props: MainProps) {
    const { children } = props;
    return (
        <>
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </>
    );
}
