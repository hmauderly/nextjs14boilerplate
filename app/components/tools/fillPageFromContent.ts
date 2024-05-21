import showdown from 'showdown';
import { getBreadCrumbTitles, getCategoryParents} from "@/app/components/strapi/fetchPageCategory";

import {
    Article,
    ArticleImage,
    BreadcrumbItem,
    Breadcrumb,
    ImageFormat,
    ApiResponse,
    ArticleData
} from "@/app/interfaces/interfaces";

/*
STRAPI
module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1280,
        medium: 750,
        small: 480,
        xsmall: 128
      },
    },
  },
});;
 */

function generateBreadcrumbItems(slugs: string[], titles: string[]): Breadcrumb {


    if (slugs.length !== titles.length) {
        throw new Error('Les tableaux slugs et titles doivent avoir la même longueur');
    }

    const breadcrumb: BreadcrumbItem[] = slugs.map((slug, index) => ({
        slug,
        title: titles[index]
    }));

    return  breadcrumb;
}
// large,small, medium, thumbnail, xlarge,xsmall

const extractImageFormat = (articleData: ArticleData, format: string): ImageFormat | null => {

    if (articleData.attributes.Image.data) {

        const images = articleData.attributes.Image.data;
        if (images.length > 0) {
            const firstImage = images[0];
            const imageFormat = firstImage.attributes.formats[format];
            if (imageFormat) return imageFormat;
        }
    }

    return null;
};

export const fillPageFromContent = async (content, slug:string[] | string) => {

    let articleImage: ArticleImage = null;
    let breadcrumbSlugs=[];
    let breadcrumbTitles=[];

    // We compose the breadcurmb slugs /level1/level2/etc
    if (typeof slug === "string") breadcrumbSlugs = ['articles',slug]; // Article: articles/titre-slug
    else breadcrumbSlugs = slug; // Page: religions / islam / ect

    // We compose the breadcurmb Titles /title1/title2/etc
    try {
        breadcrumbTitles = await getBreadCrumbTitles(content);
    }   catch (e) {
        console.error("There was a problem retrieving getBreadCrumbTitles:", e);
        throw new Error(`HTTP error! There was a problem retrieving getBreadCrumbTitles`);

    }

    if (content.attributes.Image.data && content.attributes.Image.data) {
        const formats = ['xsmall', 'medium', 'thumbnail'];
        formats.map(format => {
            const image = extractImageFormat(content, format);
            if (image) {
                console.log(`Found ${format} image.`);
            } else {
                console.log(`No ${format} image found.`);
            }

        })
        let Images = {'xsmall':null,'medium':null,'thumbnail':null};

        let format = 'xsmall';
        const xsmallImage = extractImageFormat(content, format);
        let xsmallImageUrl = null;
        if (xsmallImage) xsmallImageUrl = xsmallImage.url;
        else console.log("No xsmall image found.");

        let mediumImageUrl = null;
        format = 'medium';
        const mediumImage = extractImageFormat(content, format);
        if (mediumImage) mediumImageUrl = mediumImage.url;
        else console.log("No medium image found.");

        let thumbnailImageUrl = null;
        format = 'thumbnail';
        const thumbnailImage = extractImageFormat(content, format);
        if (thumbnailImage) thumbnailImageUrl = thumbnailImage.url;
        else console.log("No thumbnail image found.");


        const firstImage = content.attributes.Image.data[0];

        articleImage =
            {
                id: firstImage.id,
                name: firstImage.attributes.name,
                alternativeText: firstImage.attributes.alternativeText,
                caption: firstImage.attributes.caption,
                width: firstImage.attributes.width,
                height: firstImage.attributes.height,
                hash: firstImage.attributes.hash,
                url: firstImage.attributes.url,
                url_xsmall: xsmallImageUrl,
                url_medium: mediumImageUrl,
                url_thumbnail: thumbnailImageUrl,
            };
    }
    let article:Article ={

        id: content.id,
        fullpath: "",
        title : content.attributes.Title,
        content : content.attributes.Content,
        summary : content.attributes.Sommaire,
        Description : content.attributes.Keywords,
        PublishDate : content.attributes.publishedAt,
        metaKeywords : content.attributes.Keywords,
        htmlContent:"",
        htmlSummary:"",
        categoryId: content.attributes.category.data.id,
        categoryName: content.attributes.category.data.attributes.name,
        breadcrumb: generateBreadcrumbItems(breadcrumbSlugs, breadcrumbTitles),
        Image: articleImage,
    };

    article.fullpath = article.breadcrumb.map(item => item.slug).join('/');

    let converter = new showdown.Converter();
    article.htmlContent  = converter.makeHtml(article.content);
    article.htmlSummary  = converter.makeHtml(article.summary);

    return article;
};
