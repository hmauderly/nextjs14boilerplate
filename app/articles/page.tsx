import Link from "next/link";
import React from "react";
import {fetchPages} from "@/app/components/strapi/fetchPages";
import Menu from "@/app/ui/Menu";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Footer from "@/app/ui/Footer";
import ArticleItem from "@/app/ui/ArticleItem";
import type {Metadata} from "next";
import {Article} from "@/app/interfaces/interfaces";


type Props = {};



export async function generateMetadata({params}): Promise<Metadata> {

    let metadata: Metadata = {
        title: "Articles et Infos sur la Religion",
        description: "Découvrez les derniers articles et actualités sur la religion, couvrant divers événements et perspectives religieuses.",
        alternates: {canonical: process.env.BASE_URL + "/articles"},
    };

    return metadata;

}

// Mapper function
const mapArticles = (data) => {
    return data.map(item => {
        return {
            id: item.id,
            title: item.attributes.Title,
            publishDate: new Date(item.attributes.PublishDate),
            description: item.attributes.Description,
            slug: item.id + "-"+item.attributes.slug,

        };
    });
};
export default async function page({}: Props) {

    const articlesList = [];

    try {
        const data = await fetchPages(16);
        const mappedArticles = mapArticles(data.data);

        mappedArticles.forEach((item, index) => {
            const article:Article = {
                id: item.id,
                title: item.title,
                slug: item.slug,
                PublishDate: item.publishDate,
                description: item.description,
            };
            articlesList.push(<ArticleItem article={article}></ArticleItem>);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }

    const breadcrumb = [
        {slug: "articles", title: "Articles"},
    ];

    return (
        <main>
            <Menu/>
            <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto mt-24 ">
                <Breadcrumb breadcrumb={breadcrumb}/>
            </div>
            <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto  ">
                <h1 className="font-bold">Les derniers articles</h1>
            </div>

            <div className=" h-full w-5/6 items-center justify-top mx-auto ">
                {articlesList}
            </div>
            <Footer/>
        </main>
    )

}