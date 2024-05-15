'use client' // Error components must be Client Components

import React, { useEffect } from 'react'
import Menu from "@/app/ui/Menu";
import Link from "next/link";
import Footer from "@/app/ui/Footer";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main>

            <Menu/>
            <div className="h-screen container  w-5/6 flex  flex-col items-center  justify-top mx-auto my-32">
                <h2 className="my-4 text-3xl font-bold">Something went wrong!</h2>


            </div>
            <Footer/>
        </main>


    )
}