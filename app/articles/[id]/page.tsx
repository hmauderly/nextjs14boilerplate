import React from "react";
import Menu from "@/app/ui/Menu";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Footer from "@/app/ui/Footer";
import {getArticle} from "@/app/components/strapi/getArticle";
import {fillArticleFromContent} from "@/app/components/tools/fileArticleFromContent";
import {Article} from "@/app/interfaces/global";
import {Props} from "next/dist/next-server/server/page";
import {extractIdAndSlug} from "@/app/components/tools/extractIdFromSlug";
import {notFound, permanentRedirect, redirect} from "next/navigation";
import type {Metadata} from "next";
import getPathFromSlug from "@/app/components/tools/getPathFromSlug";
import {getArticleMetadata} from "@/app/components/strapi/getArticleMetadata";
import getPathFromId from "@/app/components/tools/getPathFromId";



export async function generateMetadata({params}): Promise<Metadata> {

    let metadata: Metadata = {
        title: "",
        description: "",
        alternates: {canonical: ""},
    };
    let content = null;
    const result = extractIdAndSlug(params.id);
    if (!result.id) return metadata;
    console.log("result", result);

    try {
        // Get the article metadata
        content = await getArticleMetadata(result.id, result.restOfSlug);
    } catch (error) {
        console.error('Error fetching article Metadata:', error);
        return metadata;

    }
    console.log("content", content);

    if (content && (content.status === 200) && content.ok)
    {
        metadata.title= content.data[0].attributes.Title;
        metadata.description= content.data[0].attributes.Description;
        metadata.alternates= {canonical: getPathFromId(result.id, result.restOfSlug)};
    }
    return metadata;
}

export default async function page({params}: Props) {

    let article: Article;
    let content = null;
    const result = extractIdAndSlug(params.id);
    if (!result.id) return notFound();

    try {
        // Get the article content
       content = await getArticle(result.id, result.restOfSlug);
    } catch (error) {
        console.error('Error fetching article:', error);
        Error();
    }

    if (!content) return Error();
    else if (content.status === 301 && !content.ok) {
        const newSlug = result.id + "-"+content.data[0].attributes.slug;
        return permanentRedirect(`/articles/${newSlug}`)
    }
    else if (content.status === 500 && !content.ok) Error();
    else if (content.status === 404 && !content.ok ) notFound();
    else {
        // Fill the article object with the content
        article = await fillArticleFromContent(content.data[0]);
    }

    const breadcrumb = [{title: "Articles", slug: "articles"},
        {title: article.title, slug: "articles/"+article.id}
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