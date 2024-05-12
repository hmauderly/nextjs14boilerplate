import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";

type Props = {};

export default function NotFound({}: Props) {
    return (
        <main className="container flex-row w-full  mx-auto">
            <Menu title="A new title"/>
            <div className="container w-5/6 flex  flex-col items-center  justify-center mt-10 mx-auto">
                SUB
            </div>
            <Footer/>
        </main>
    );
}
