import React from "react";

export default function Menu(props: any) {

    return (

        <nav className="menu flex flex-row justify-between">
            <div className="border-2">
                    <span className="text-white py-4 px-6 lg:menu-horizontal rounded-box ">
                        <li><a>{props.title}</a></li>

                    </span>
            </div>

            <div className="border-2" id="navbar-default">
                <ul className="text-white py-4 px-6 lg:menu-horizontal rounded-box ">
                    <li><a>Home</a></li>
                    <li>
                        <details close="true">
                            <summary>Religions</summary>
                            <ul className="text-gray-800">
                                <li><a>Christianisme</a></li>
                                <li><a>Islam</a></li>
                                <li><a>Judaisme</a></li>
                                <li><a>Boudhisme</a></li>
                                <li><a>Indouhisme</a></li>

                                <li>
                                    <details close="true">
                                        <summary>Autres</summary>
                                        <ul>
                                            <li><a>Autre 1</a></li>
                                            <li><a>Autre 2</a></li>

                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Articles</a></li>
                    <li><a>Calendrier</a></li>
                    <li><a>Ressources</a></li>
                </ul>
            </div>
        </nav>

    );
}
