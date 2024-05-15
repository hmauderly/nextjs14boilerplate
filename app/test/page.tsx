
import React from "react";

import {global} from "styled-jsx/css";

import Script, {Props} from "next/script";



export default async function page(props: Props) {


    return (
        <main className="container flex-row w-full  mx-auto">

            <div className="container w-5/6 flex  flex-col items-center  justify-center mt-10 mx-auto">
                <p>Test</p>

            </div>
            <div className="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20">
                <div className="group relative cursor-pointer py-2">

                    <div className="flex items-center justify-between space-x-5 bg-white px-4">
                        <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4">
                            Choose Day
                        </a>
                        <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
            </span>
                    </div>

                    <div
                        className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                            Sunday
                        </a>


                    </div>
                </div>
            </div>
            <Script
                src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
                strategy="lazyOnload"
            />

        </main>
    );

}