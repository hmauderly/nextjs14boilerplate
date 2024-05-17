
import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import Breadcrumb from "@/app/ui/Breadcrumb";
import {fetchPage} from "@/app/components/strapi/fetchPage";
import {fillPageFromContent} from "@/app/components/tools/fillPageFromContent";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Props} from "next/dist/next-server/server/page";
import getPathFromSlug from "@/app/components/tools/getPathFromSlug";


export async function generateMetadata(props: Props): Promise<Metadata> {
    let slug: string = props.params.slug[props.params.slug.length-1];
    let metadata: Metadata = {
        title: "",
        description: "",
        alternates: {canonical: ""},
    };
    let content = null;


    try {
        // Get the article metadata
        content = await fetchPage(null, slug,"slug",false);
    } catch (error) {
        console.error('Error fetching article Metadata:', error);
        return metadata;

    }

    if (content && (content.status === 200) && content.ok)
    {
        metadata.title= content.data[0].attributes.Title;
        metadata.description= content.data[0].attributes.Description;
        metadata.alternates= {canonical: getPathFromSlug(props.params.slug)};
    }
    return metadata;

}

export default async function page(props: Props) {

// params { slug: [ 'slug1', 'slug2',...., 'slugN']}
    let content = null;
    let page=null;
    let slug = props.params.slug;

    try {
        content = await fetchPage(-1,slug[slug.length-1],"slug",true);

    } catch (e) {
        console.error("There was a problem retrieving article:", e);
        return {status: 500, ok: false};
    }

    if (content.status === 500 &&  !content.ok ) return Error(); // Erreur lors du call
    else if (content.status === 404 && !content.ok ) return notFound(); // Contenu API non trouvé
    else {
        console.log("content", content.data[0].Image)
        try {
            page =  await fillPageFromContent(content.data[0], slug);

        } catch (e) {
            console.error("There was a problem filling article:", e);
            return Error();
        }
        return (
            <main>
                <Menu/>
                <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto mt-24 ">
                    <Breadcrumb breadcrumb={page.breadcrumb}/>
                </div>

                <div className="h-full w-5/6 flex  flex-col items-center  justify-top mx-auto  ">

                    <h1 className="mt-10 text-3xl font-bold">{page.title}</h1>
                    <div className="article">
                        <article className=" prose-base prose-img:p-6  prose-img:mx-auto">

                            <div dangerouslySetInnerHTML={{__html: page.htmlContent}}></div>
                        </article>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }

}