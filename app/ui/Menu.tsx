import React from "react";
import Script from "next/script";
import Image from "next/image";

export default function Menu(props: any) {

    return (


        <div className="w-full mx-auto ">

            <nav className="bg-menu rounded-xl">
                <div className="flex flex-col md:flex-row items-center px-3 py-2 ">
                    <div><a href="#" className="flex ">
                        <Image
                            src="/assets/img/religio_ico_trans_ld.png"
                            width={40}
                            height={40}
                            className="m-2"
                            alt="Religio.fr"
                        />

                        <span className="self-center text-lg font-semibold whitespace-nowrap">RELIGIO.FR</span>

                    </a>

                </div>
                <div className="  px-3 py-3  ">
                    <div className=" " id="mobile-menu">
                        <ul className=" flex-wrap md:flex-row justify-center flex  p-0 ">

                            <li>
                                <div className="p-0 rounded-2xl hover:bg-menuhover  md:hover:bg-menuhover">
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                            className=" text-white menu-title  border-0 md:border-0   flex items-center justify-center  block ">RELIGIONS
                                        <svg
                                            className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                    </button>

                                    <div id="dropdownNavbar"
                                         className="hidden bg-menuhover   list-none  rounded shadow">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu  border-0 md:border-0 block px-4 py-2">CHRISTIANISME</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu  border-0 md:border-0 block px-4 py-2">ISLAM</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className=" text-white menu-subtitle hover:bg-menu border-0 md:border-0 block px-4 py-2">JUDAISME</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu border-0 md:border-0 block px-4 py-2">BOUDHISME</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu border-0 md:border-0 block px-4 py-2">INDOUISME</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu border-0 md:border-0 block px-4 py-2">AUTRES
                                                    RELIGIONS</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="p-0 rounded-2xl hover:bg-menuhover  md:hover:bg-menuhover">
                                    <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2"
                                            className=" text-white menu-title  border-0 md:border-0   flex items-center justify-center block ">HISTOIRE
                                        <svg
                                            className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                    </button>

                                    <div id="dropdownNavbar2"
                                         className="hidden bg-menuhover   list-none  rounded shadow">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu  border-0 md:border-0 block px-4 py-2">CHRISTIANISME</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu  border-0 md:border-0 block px-4 py-2">ISLAM</a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="p-0 rounded-2xl hover:bg-menuhover  md:hover:bg-menuhover">
                                    <button id="dropdownNavbarLink3" data-dropdown-toggle="dropdownNavbar3"
                                            className=" text-white menu-title  border-0 md:border-0   flex items-center justify-center block ">PANORAMA
                                        <svg
                                            className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                    </button>

                                    <div id="dropdownNavbar3"
                                         className="hidden bg-menuhover   list-none  rounded shadow">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#"
                                                   className=" text-white menu-subtitle hover:bg-menu  border-0 md:border-0 block ">LIEUX</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-white menu-subtitle hover:bg-menu  border-0 md:border-0 block px-4 py-2">SYMBOLES</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className=" text-white menu-subtitle hover:bg-menu border-0 md:border-0 block px-4 py-2">PERSONNAGES</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="p-0 rounded-2xl hover:bg-menuhover  md:hover:bg-menuhover">
                                    <a href="#"
                                       className="text-white  menu-title border-0 md:border-0 block ">CALENDRIER</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-0 rounded-2xl hover:bg-menuhover  md:hover:bg-menuhover">
                                    <a href="#"
                                       className="text-white  menu-title border-0 md:border-0 block ">RESSOURCES</a>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
                </div>
            </nav>
            <Script
                src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"
                strategy="lazyOnload"
            />
        </div>

    )

}
