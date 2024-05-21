import Link from "next/link";
import React from "react";
import {fetchPages} from "@/app/components/strapi/fetchPages";
import Menu from "@/app/ui/Menu";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Footer from "@/app/ui/Footer";
import ArticleItem from "@/app/ui/ArticleItem";
import Pagination from "@/app/ui/Pagination";
import type {Metadata} from "next";
import {ArticleSmall} from "@/app/interfaces/interfaces";

const CATEGORY_ARTICLES = process.env.CATEGORY_ARTICLES;

type Props = {};



export async function generateMetadata({params}): Promise<Metadata> {

    let metadata: Metadata = {
        title: "Articles et Infos sur la Religion",
        description: "Découvrez les derniers articles et actualités sur la religion, couvrant divers événements et perspectives religieuses.",
        alternates: {canonical: process.env.BASE_URL + "/articles"},
        robots: "index, follow",
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
            imageUrl: item.attributes.Image.data && item.attributes.Image.data.length > 0
                ? item.attributes.Image.data[0].attributes.formats.thumbnail.url
                : ""

        };
    });
};
export default async function page({}: Props) {

    const articlesList = [];
    let pagination = {};

    try {
        const data = await fetchPages(CATEGORY_ARTICLES, 1, 10);
        const mappedArticles = mapArticles(data.data);
        pagination = data.meta.pagination;

        mappedArticles.forEach((item, index) => {
            const article:ArticleSmall = {
                id: item.id,
                title: item.title,
                slug: item.slug,
                PublishDate: item.publishDate,
                description: item.description,
                imageUrl: item.imageUrl,
            };
            articlesList.push(<ArticleItem articleSmall={article}></ArticleItem>);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }

     const pagination2={
        page: 4,
        pageSize: 10,
        pageCount: 10,
        total: 100,

    };

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
            <div className=" mt-6 h-full w-5/6 items-center justify-center mx-auto ">
                <Pagination
                    page={pagination2.page}
                    pageCount={pagination2.pageCount}
                />
            </div>
                <Footer />
        </main>
)

}