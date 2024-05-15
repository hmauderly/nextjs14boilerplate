import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import Link from "next/link";

type Props = {};

export default function NotFound({}: Props) {
    return (
        <main>

            <Menu/>
            <div className="h-screen container  w-5/6 flex  flex-col items-center  justify-top mx-auto my-32">
                <h2 className="my-4 text-3xl font-bold">Page not found !</h2>
                <Link href={"/"}>Back to home</Link>

            </div>
            <Footer/>
        </main>
    );
}
