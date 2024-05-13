import React from "react";
import Script from "next/script";
import Image from "next/image";

export default function Menu(props: any) {

    return (


        <div className="  w-full pl-0 pr-0 top-0 fixed">


            <nav className="bg-menu  text-white  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mr-2 p-0.5">
                    <a href="/" className="flex items-center space-x-3  rtl:space-x-reverse">
                        <Image
                            src="/assets/img/religio_ico_trans_ld.png"
                            width={60}
                            height={60}
                            className="m-2"
                            alt="Religio.fr"
                        />            <span
                            className="self-center text-2xl font-semibold whitespace-nowrap">RELIGIO.FR</span>
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-menuhover focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden text-white  w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <div className="hover:bg-menuhover rounded-xl p-1">
                                <li>
                                    <a href="/"
                                       className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0  "
                                       aria-current="page">Home</a>
                                </li>
                            </div>
                            <li>
                                <div className="hover:bg-menuhover rounded-xl p-1">
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                            className="flex items-center justify-between w-full py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ">Religions <svg
                                        className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg></button>

                                    <div id="dropdownNavbar"
                                         className="z-10 hidden font-normal bg-white  rounded-lg shadow w-44">
                                        <ul className="py-2 text-sm text-black "
                                            aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="/religions/christianisme"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Christianisme</a>
                                            </li>

                                            <li>
                                                <a href="/religions/islam"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Islam</a>
                                            </li>
                                            <li>
                                                <a href="/religions/judaisme"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Judaisme</a>
                                            </li>
                                            <li>
                                                <a href="/religions/bouddhisme"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Boudhisme</a>
                                            </li>
                                            <li>
                                                <a href="/religions/hindouisme"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Hindousime</a>
                                            </li>
                                            <li>
                                                <a href="/religions/autres"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Autres religions</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className="hover:bg-menuhover rounded-xl p-1">
                                    <a href="#"
                                       className="block py-2 px-3 rounded   md:border-0  md:p-0  ">Histoire</a>
                                </div>
                            </li>
                            <li>
                                <div className="hover:bg-menuhover rounded-xl p-1">
                                    <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2"
                                            className="flex items-center justify-between w-full py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ">Panorama <svg
                                        className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg></button>

                                    <div id="dropdownNavbar2"
                                         className="z-10 hidden font-normal bg-white  rounded-lg shadow w-44">
                                        <ul className="py-2 text-sm text-black "
                                            aria-labelledby="dropdownLargeButton2">
                                            <li>
                                                <a href="/panorama/enfants"
                                                   className="block px-4 py-2 hover:bg-menuhover ">La religion expliquée aux enfants</a>
                                            </li>

                                            <li>
                                                <a href="/panorama/figures"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Figures religieuses importantes</a>
                                            </li>
                                            <li>
                                                <a href="/panorama/lieux"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Lieux de culte et lieux saints</a>
                                            </li>
                                            <li>
                                                <a href="/panorama/symboles"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Symboles et rituels religieux</a>
                                            </li>
                                            <li>
                                                <a href="/panorama/textes"
                                                   className="block px-4 py-2 hover:bg-menuhover ">Textes sacrés et livres religieux</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                            </li>
                            <li>

                                <div className="hover:bg-menuhover rounded-xl p-1">

                                    <a href="#"
                                       className="block py-2 px-3 rounded   md:border-0  md:p-0  ">Calendrier</a>
                                </div>
                            </li>
                            <li>
                                <div className="hover:bg-menuhover rounded-xl p-1">
                                    <a href="#"
                                       className="block py-2 px-3 rounded  hover:bg-menuhover  md:border-0  md:p-0  ">Ressources</a>
                                </div>
                            </li>

                        </ul>

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
