import Image from "next/image";
import React from "react";
import {getPageById} from "@/app/components/strapi/getPageById";
import {getPageBySlug} from "@/app/components/strapi/getPageBySlug";


type Props = {
    params: {
        id: number;
    };
};

const getData = async (id: number) => {
    const res = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await res.json();
    return data;
};



export default async function page({ params }: Props) {

    const article = await getData(params.id);
    const article2 = await getPageById(2);
    const article3 = await getPageBySlug("kkkk");

    console.log(article2);
    console.log(article3);
    return (
        <div className="container">
            {/* <Image
        src={article.lienImage}
        width={250}
        height={250}
        alt="Shoes"
        className="w-full rounded-md mb-2"
      /> */}
            <h1 className="titre">{article.titre}</h1>
            <p>{article.contenu}</p>

            <div className="mt-3 bg-slate-400 text-indigo-500">
                <span>{article.auteur}</span>
            </div>
        </div>
    );
}