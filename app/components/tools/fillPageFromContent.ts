import showdown from 'showdown';
import {fetchPageCategory} from "@/app/components/strapi/fetchPageCategory";
import {concat} from "@tootallnate/quickjs-emscripten/dist/types";


export const fillPageFromContent = async (content, slug) => {
   // slug: [ 'slug1', 'slug2',...., 'slugN']

    let categoryParents:string[] = [];
    try {
        categoryParents = await fetchPageCategory(content.attributes.category.data.id);

    } catch (e) {
        console.error("There was a problem retrieving categoryParents:", e);
        throw new Error(`HTTP error! There was a problem retrieving fetchPageCategory`);

    }
    let breadcrumbItems = [];
    if (typeof slug === "string") breadcrumbItems = ["articles",slug]; // this is an article whith slug = id-string
    else if (Array.isArray(slug)) breadcrumbItems = slug; // this is a page with slug = [ 'slug1', 'slug2',...., 'slugN']

    let page ={

        fullpath: "",
        title : content.attributes.Title,
        content : content.attributes.Content,
        summary : content.attributes.Sommaire,
        metaDescription : content.attributes.Keywords,
        PublishDate : content.attributes.publishedAt,
        metaKeywords : content.attributes.Keywords,
        htmlContent:"",
        htmlSummary:"",
        categoryId: content.attributes.category.data.id,
        categoryName: content.attributes.category.data.attributes.name,
        breadcrumb: [[]],
        Image: {
            url : "",
            name:"",
        }
    };

    categoryParents = concat([...categoryParents.filter(item => item !== 'Home').reverse(), page.categoryName, page.title]);;
    page.fullpath = '/' + breadcrumbItems.join('/');
    let converter = new showdown.Converter();
    page.htmlContent  = converter.makeHtml(page.content);
    page.htmlSummary  = converter.makeHtml(page.summary);


    page.breadcrumb = <[]>breadcrumbItems.map((slug, index) => ({
        slug,
        title: categoryParents[index]
    }));


    return page;
};
