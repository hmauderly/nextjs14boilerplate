import {PageRemoteContent, Page} from "@/app/types/global";
import showdown from 'showdown';

export const fillPageFromContent = async (content: PageRemoteContent, slug:string) => {


    let page: Page = {
        slug : content.attributes.slug,
        title : content.attributes.Title,
        content : content.attributes.Content,
        metaDescription : content.attributes.Keywords,
        PublishDate : content.attributes.publishedAt,
        metaKeywords : content.attributes.Keywords,
        htmlContent:"",
        error: content.attributes.slug != slug[slug.length-1] // We take the last slug from the path Ex  slug: [ 'aaaa', 'bbb' ],

    };

    let converter = new showdown.Converter();

    page.htmlContent  = converter.makeHtml(page.content);

    return page;
};
export default fillPageFromContent;
