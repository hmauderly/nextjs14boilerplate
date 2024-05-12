
import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import {getPageBySlug} from "@/app/components/strapi/getPageBySlug";
import showdown from 'showdown';

type Props = {
    params: {
        slug: string;
        path: string;
    };

};
type Article = {
     title: string;
     content: string;
     metaDescription: string;
     metaKeywords: string;
     PublishDate: string;
     slug: string;


};

export default async function page(props: Props) {
  //  const qs = props.searchParams;
    const path = props.params;
    props.params.path = props.params.slug.toString().replace(",","/");



    console.log(props);
    const page = await getPageBySlug(props.params.slug);
    console.log(page.data[0].attributes.Content);
    const content = page.data[0].attributes.Content;
    let converter = new showdown.Converter();
    let md = page.data[0].attributes.Content;
    let html = converter.makeHtml(md);
    console.log(html);



    return (
        <main className=" ">
            <Menu title="A new title"/>
            <div className="container  w-5/6 flex  flex-col items-center  justify-center mx-auto my-32">
                <h1 className="my-4 text-3xl font-bold">{page.data[0].attributes.Title}</h1>
                <article className=" prose-base prose-img:p-6  prose-img:mx-auto">
                    <div dangerouslySetInnerHTML={{__html: html}}></div>
                </article>
            </div>
            <Footer/>
        </main>
    );

}