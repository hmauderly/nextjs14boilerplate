import {concat} from "@tootallnate/quickjs-emscripten/dist/types";

const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

function hasData(json: any, key: string): boolean {
    // Vérifie si la clé 'data' existe et contient au moins un élément
    if (json[key] && Array.isArray(json[key]) && json[key].length > 0) {
        return true;
    }
    return false;
}


// export async function getPageBySlug(id: number) {
export const fetchPageSubCategories = async (categoryId:number) => {

    let url = new URL(API_URL + "/api/categories?filters[category][id][$eq]="+categoryId.toString()+"&populate=*&sort[0]=level" );

    let content = null;
    const options = {
        headers: {'Authorization': `Bearer ${TOKEN}`},
        cache: 'no-store',
        revalidate: 0,
    };
    try {
        const response = await fetch(url.href,options);
        content = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (e) {
        console.error("There was a problem retrieving page category:", e);
        throw new Error(`HTTP error! There was a problem retrieving page category`);

    }
    let data = null;

    if (hasData(content, 'data')) {
        data = extractData(content.data);
        return data;
    }
    else throw new Error(`HTTP error! There was a problem retrieving page category`);


};


const extractData = (response) => {
    return response.map(item => {
        const {  level, image,page } = item.attributes;
        const alternativeText = image.data.attributes.alternativeText;
        const smallUrl = image.data.attributes.formats.small.url;
        const title = page.data.attributes.Title;
        const slug = page.data.attributes.slug;
        const id = item.id;

        return { id,title, level, slug, alternativeText, smallUrl };
    });
};


