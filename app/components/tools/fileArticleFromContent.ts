import showdown from 'showdown';
import {Article} from "@/app/interfaces/global";


export const fillArticleFromContent = async (content:any) => {


    let article:Article ={

        id : content.id,
        slug :content.attributes.slug,
        fullSlug: content.id + "-" + content.attributes.slug,
        title : content.attributes.Title,
        content : content.attributes.Content,
        metaDescription : content.attributes.Keywords,
        PublishDate : content.attributes.publishedAt,
        metaKeywords : content.attributes.Keywords,
        htmlContent:"",
        htmlSummary:"",
    };

    let converter = new showdown.Converter();
    article.htmlContent  = converter.makeHtml(article.content);



    return article;
};
