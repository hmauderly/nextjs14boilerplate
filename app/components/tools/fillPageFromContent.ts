import showdown from 'showdown';
import {Page} from "@/app/interfaces/global";
import {getPageCategory} from "@/app/components/strapi/getPageCategory";
import {concat} from "@tootallnate/quickjs-emscripten/dist/types";

export const fillPageFromContent = async (content, slug:[]) => {

    const categoryParents = await getPageCategory(content.attributes.category.data.id);

    let page:Page ={
        fullslug : slug,
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
        ok: false,
        categoryParents: [],
        status:categoryParents.status,
        breadcrumbItems: [],
    };
    if ((categoryParents.status === 200) && categoryParents.ok) {
        page.categoryParents = concat([...categoryParents.parents.filter(item => item !== 'Home').reverse(), page.categoryName, page.title]);
        page.ok = true;
        page.fullpath = '/' + page.fullslug.join('/');
        let converter = new showdown.Converter();
        page.htmlContent  = converter.makeHtml(page.content);
        page.htmlSummary  = converter.makeHtml(page.summary);
    }


    page.breadcrumbItems = page.fullslug.map((slug, index) => ({
        slug,
        title: page.categoryParents[index]
    }));



    return page;
};
