import Link from "next/link";
import React from "react";
import {getArticles} from "@/app/components/strapi/getArticles";
import Menu from "@/app/ui/Menu";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Footer from "@/app/ui/Footer";

type Props = {};

interface Article {
    id: number;
    attributes: {
        Title: string;
        PublishDate: string;
        Description: string;
    };
}
// Mapper function
const mapArticles = (articles: Article[]) => {
    return articles.map(article => {
        return {
            id: article.id,
            title: article.attributes.Title,
            publishDate: new Date(article.attributes.PublishDate),
            description: article.attributes.Description
        };
    });
};
export default async function page({}: Props) {

    const articlesList = [];

    try {
        const data = await getArticles();
        const mappedArticles = mapArticles(data.data);

        // Iterate through the mapped articles using forEach
        mappedArticles.forEach(article => {
            console.log(`ID: ${article.id}`);
            console.log(`Title: ${article.title}`);
            console.log(`Publish Date: ${article.publishDate}`);
            console.log(`Description: ${article.description}`);
            console.log('--------------------------------');
        });
        mappedArticles.forEach((item, index) => {
            articlesList.push(
                <li key={index}>
                    <Link legacyBehavior href={`/articles/${item.id}`}>
                        <a className="">
                            {item.title}{item.description}
                        </a>
                    </Link>
                </li>
            );
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }



    return (
        <main>
            <Menu/>
            <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto mt-24 ">
               BC
            </div>

            <div className="h-full w-5/6 flex  flex-col items-center  justify-top mx-auto  ">
                {articlesList}

            </div>
            <Footer/>
        </main>
    )

}