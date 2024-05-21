import React from "react";
import Menu from "@/app/ui/Menu";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Footer from "@/app/ui/Footer";
import {fillPageFromContent} from "@/app/components/tools/fillPageFromContent";
import {Props} from "next/dist/next-server/server/page";
import {extractIdAndSlug} from "@/app/components/tools/extractIdFromSlug";
import {notFound, permanentRedirect, redirect} from "next/navigation";
import type {Metadata} from "next";
import getPathFromId from "@/app/components/tools/getPathFromId";
import {fetchPage} from "@/app/components/strapi/fetchPage";
import {Article} from "@/app/interfaces/interfaces";



export async function generateMetadata(props: Props): Promise<Metadata> {
    let slug: string = props.params.slug;
    let content = null;

    let metadata: Metadata = {
        title: "",
        description: "",
        alternates: {canonical: ""},
        robots: "index, follow",
    };

    const result = extractIdAndSlug(slug);
    if (!result.id) return metadata;

    try {
        // Get the article metadata
        content = await fetchPage(result.id, result.restOfSlug,"id",false);
    } catch (error) {
        console.error('Error fetching page Metadata:', error);
        return metadata;

    }

    if (content && (content.status === 200) && content.ok)
    {
        metadata.title= content.data[0].attributes.Title;
        metadata.description= content.data[0].attributes.Description;
        metadata.alternates= {canonical: getPathFromId(result.id, result.restOfSlug)};
    }
    return metadata;
}

export default async function page(props: Props) {
    /*   params {
           params: {
               slug: ''
           },
           searchParams: {}
       }*/
    // -->   slug: [ 'slug1', 'slug2',...., 'slugN']


    let content = null;
    let article : Article;

    const result = extractIdAndSlug(props.params.slug);
    if (!result.id) return notFound();

    try {
        // Get the article content
        content = await fetchPage(result.id, result.restOfSlug,"id",true);
    } catch (error) {
        return Error();
    }

    if (!content)  Error();
    else if (content.status === 301 && !content.ok) {

        const newSlug = result.id + "-"+content.data[0].attributes.slug;
        return permanentRedirect(`/articles/${newSlug}`)
    }
    else if (content.status === 500 && !content.ok) return Error();
    else if (content.status === 404 && !content.ok ) return notFound();
    else {
        // Fill the article object with the

        try {
            // Get the article content
            article = await fillPageFromContent(content.data[0],result.restOfSlug);
        } catch (error) {
            return Error();
        }

    }

    return (
        <main>
            <Menu/>
            <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto mt-24 ">
                <Breadcrumb breadcrumb={article.breadcrumb}/>
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