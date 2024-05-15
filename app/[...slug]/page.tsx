
import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import Breadcrumb from "@/app/ui/Breadcrumb";
import {getPage} from "@/app/components/strapi/getPage";
import {getPageMetadata} from "@/app/components/strapi/getPageMetadata";
import {fillPageFromContent} from "@/app/components/tools/fillPageFromContent";
import type {Metadata} from "next";
import getPathFromSlug from "@/app/components/tools/getPathFromSlug";
import {notFound} from "next/navigation";
import {global} from "styled-jsx/css";


export async function generateMetadata({params}): Promise<Metadata> {

    let metadata: Metadata = {
        title: "",
        description: "",
        alternates: {canonical: ""},
    };

    const content = await getPageMetadata(params.slug);

    if (content.status === 500 && !content.ok )  return metadata;
    else if (content.status === 404 &&  !content.ok )  return metadata;
    else {
            metadata.title= content.data[0].attributes.Title;
            metadata.description= content.data[0].attributes.Description;
            metadata.alternates= {canonical: getPathFromSlug(params.slug)};
    }
    return metadata;
}

export default async function page({params}: { params: { slug: string } }) {

    const content = await getPage(params.slug);
    if (content.status === 500 &&  !content.ok ) Error(); // Erreur lors du call
    else if (content.status === 404 && !content.ok ) notFound(); // Contenu API non trouvé
    else {

        const page = await fillPageFromContent(content.data[0], params.slug);


        return (
            <main>
                <Menu/>
                <div className="  w-5/6 flex  flex-col items-left justify-left mx-auto mt-24 ">
                    <Breadcrumb breadcrumb = {page.breadcrumbItems}/>
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