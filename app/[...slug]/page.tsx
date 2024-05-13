
import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import {getPage} from "@/app/components/strapi/getPage";
import {getPageMetadata} from "@/app/components/strapi/getPageMetadata";
import {fillPageFromContent} from "@/app/components/tools/fillPageFromContent";
import {Page} from "@/app/types/global";
import type {Metadata} from "next";
import getPathFromSlug from "@/app/components/tools/getPathFromSlug";



export async function generateMetadata(props: Props): Promise<Metadata> {


    const content = await getPageMetadata(props.params.slug);


    return {
        title: content.data[0].attributes.Title,
        description: content.data[0].attributes.Description,
        alternates: {canonical: getPathFromSlug(props.params.slug)},
    };
}


export default async function page(props: Props) {

    props.params.path = props.params.slug.toString().replace(",","/");

    const content = await getPage(props.params.slug);
    const page = await fillPageFromContent(content.data[0], props.params.slug);


    return (
        <main>

            <Menu/>
            <div className="container  w-5/6 flex  flex-col items-center  justify-center mx-auto my-32">
                <h1 className="my-4 text-3xl font-bold">{page.title}</h1>
                <article className=" prose-base prose-img:p-6  prose-img:mx-auto">
                    <div dangerouslySetInnerHTML={{__html: page.htmlContent}}></div>
                </article>
            </div>
            <Footer/>
        </main>
    );

}