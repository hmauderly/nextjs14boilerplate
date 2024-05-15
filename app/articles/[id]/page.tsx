import Link from "next/link";
import React from "react";
import Menu from "@/app/ui/Menu";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Footer from "@/app/ui/Footer";
import {getArticle} from "@/app/components/strapi/getArticle";
import {fillArticleFromContent} from "@/app/components/tools/fileArticleFromContent";
import {Article} from "@/app/interfaces/global";
import {Props} from "next/dist/next-server/server/page";

export default async function page({params}: Props) {


    let article: Article;

    try {
        const content = await getArticle(params.id);

        // Utilisez fillArticleFromContent pour remplir l'article

        article = await fillArticleFromContent(content.data[0]);
        console.log(article)
    } catch (error) {
        console.error('Error fetching article:', error);
    }

    const breadcrumb = [

        {
            title: "Articles",
            slug: "articles"
        },
        {
            title: article.title,
            slug: "articles/"+article.id
        }
    ];

    return (
        <main>
            <Menu/>

            <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto mt-24 ">
                <Breadcrumb breadcrumb={breadcrumb}/>
            </div>

            <div className="h-full w-5/6 flex  flex-col items-center  justify-top mx-auto  ">

                <h1 className="mt-10 text-3xl font-bold">{article.title}</h1>
                <div className="article">
                    <article className=" prose-base prose-img:p-6  prose-img:mx-auto">

                        <div dangerouslySetInnerHTML={{__html: article.htmlContent}}></div>
                    </article>
                </div>
            </div>

            <Footer/>
        </main>
    )

}