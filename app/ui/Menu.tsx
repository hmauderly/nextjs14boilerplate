import React from "react";
import Script from "next/script";
import Image from "next/image";

export default function Menu() {

    return (


        <div className="  w-full pl-0 pr-0 top-0 fixed">


            <nav className="bg-menu  text-white  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mr-2 p-0">
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
                    <div className="mx-4  hidden text-white  w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium  md:p-0   rounded-lg  md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <div className="hover:bg-menuhover rounded-xl p-2">

                                    <a href="/"
                                       className="block text-white rounded md:bg-transparent   "
                                       aria-current="page">Home</a>

                                </div>
                            </li>
                            <li>
                                <div className="p-2  hover:bg-menuhover rounded-xl group relative cursor-pointer ">
                                    <div className="flex flex-row items-center">
                                        <a href="/religions" className="menu-hover ">Religions</a>
                                        <svg
                                            className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>

                                    </div>
                                    <div
                                        className="z-10 mt-2 py-1   flex flex-col bg-white text-gray-700 rounded-lg shadow w-60 invisible absolute group-hover:visible">
                                        <div className="flex flex-row justify-left items-center">
                                            <div className="my-1 block hover:rounded-l    px-4  md:mx-2">
                                                <a href="/religions/christianisme"><Image
                                                    src="/assets/img/logo_chris.webp"
                                                    width={40}
                                                    height={40}
                                                    className=""
                                                    alt="Christianisme"
                                                /></a>
                                            </div>
                                            <div
                                                className="p-2 rounded hover:bg-menuhover font-semibold">
                                                <a href="/religions/christianisme">Christianisme</a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-left items-center">
                                            <div className="my-1 block hover:rounded-l    px-4  md:mx-2">
                                                <a href="/religions/islam"><Image
                                                    src="/assets/img/logo_islam.webp"
                                                    width={40}
                                                    height={40}
                                                    className=""
                                                    alt="Islam"
                                                /></a>
                                            </div>
                                            <div
                                                className="p-2 rounded hover:bg-menuhover font-semibold">
                                                <a href="/religions/islam">Islam</a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-left items-center">
                                            <div className="my-1 block hover:rounded-l    px-4  md:mx-2">
                                                <a href="/religions/judaisme"><Image
                                                    src="/assets/img/logo_juda.webp"
                                                    width={40}
                                                    height={40}
                                                    className=""
                                                    alt="Judaisme"
                                                /></a>
                                            </div>
                                            <div
                                                className="p-2 rounded hover:bg-menuhover font-semibold">
                                                <a href="/religions/judaisme">Judaisme</a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-left items-center">
                                            <div className="my-1 block hover:rounded-l    px-4  md:mx-2">
                                                <a href="/religions/bouddhisme"><Image
                                                    src="/assets/img/logo_boud.webp"
                                                    width={40}
                                                    height={40}
                                                    className=""
                                                    alt="Bouddhisme"
                                                /></a>
                                            </div>
                                            <div
                                                className="p-2 rounded hover:bg-menuhover font-semibold">
                                                <a href="/religions/bouddhisme">Bouddhisme</a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-left items-center">
                                            <div className="my-1 block hover:rounded-l    px-4  md:mx-2">
                                                <a href="/religions/hindouisme"><Image
                                                    src="/assets/img/logo_indou.webp"
                                                    width={40}
                                                    height={40}
                                                    className=""
                                                    alt="Hidouisme"
                                                /></a>
                                            </div>
                                            <div
                                                className="p-2 rounded hover:bg-menuhover font-semibold">
                                                <a href="/religions/hindouisme">Hidouisme</a>
                                            </div>
                                        </div>


                                        <div className="p-2 rounded hover:bg-menuhover text-center font-semibold">Autres
                                            religions
                                        </div>


                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="hover:bg-menuhover rounded-xl p-2">
                                    <a href="/articles"
                                       className="block   rounded   md:border-0  md:p-0  ">Articles</a>
                                </div>
                            </li>
                            <li>
                                <div className="p-2  hover:bg-menuhover rounded-xl group relative cursor-pointer ">
                                    <div className="flex flex-row items-center">
                                        <a href="/panorama" className="menu-hover ">Panorama</a>
                                        <svg
                                            className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>

                                    </div>
                                    <div
                                        className="z-10 mt-2 flex flex-col bg-white text-gray-700 rounded-lg shadow w-60 invisible absolute group-hover:visible">
                                        <a href="/panorama/histoire-des-religions"
                                           className="my-1 block  hover:rounded-l hover:bg-menuhover px-4 py-1 font-semibold md:mx-2">
                                        L'histoire des
                                            religions
                                        </a>
                                        <a href="/panorama/la-religion-expliquee-aux-enfants"
                                           className="my-1 block  hover:rounded-l hover:bg-menuhover px-4 py-1 font-semibold md:mx-2">
                                        La religion expliquée
                                            aux enfants
                                        </a>
                                        <a href="/panorama/figures-religieuses-importantes"
                                           className="my-1 block  hover:rounded-l hover:bg-menuhover px-4 py font-semibold md:mx-2">
                                        Figures religieuses
                                            importantes
                                        </a>
                                        <a href="/panorama/symboles"
                                           className="my-1 block  hover:rounded-l hover:bg-menuhover px-4 py-1 font-semibold md:mx-2">
                                        Symboles et rituels
                                            religieux
                                        </a>
                                        <a href="/panorama/lieux-cultes-et-lieux-saints"
                                           className="my-1 block  hover:rounded-l hover:bg-menuhover px-4 py-1 font-semibold md:mx-2">
                                        Lieux de culte et
                                            lieux saints
                                        </a>
                                        <a href="/panorama/textes"
                                           className="my-2 block  hover:rounded-l hover:bg-menuhover px-4 py-1 font-semibold md:mx-2">
                                        Textes sacrés et
                                            livres religieux
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>

                                <div className="hover:bg-menuhover rounded-xl p-2">

                                    <a href="#"
                                       className="block   rounded   md:border-0  md:p-0  ">Calendrier</a>
                                </div>
                            </li>
                            <li>
                                <div className="hover:bg-menuhover  rounded-xl p-2">
                                    <a href="#"
                                       className="block  rounded  hover:bg-menuhover  md:border-0  md:p-0  ">Ressources</a>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <Script
                src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
                strategy="lazyOnload"
            />
        </div>

    )

}
