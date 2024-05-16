import {redirect} from "next/navigation";
import { NotFound } from 'next/navigation';

const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

function hasData(json: any, key: string): boolean {
    // Vérifie si la clé 'data' existe et contient au moins un élément
    if (json[key] && Array.isArray(json[key]) && json[key].length > 0) {
        // Vous pouvez ajouter plus de validations ici si nécessaire
        return true;
    }
    return false;
}



// export async function getPageBySlug(id: number) {
export const getPageMetadata = async (slug: string) => {

    const url = new URL(API_URL + "/api/pages?filters[slug][$eq]=" + slug[slug.length-1]);

    const options = {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        cache: 'no-store',
        revalidate: 0,
    };


    try {
        const response = await fetch(url,options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const page = await response.json();

        const result = hasData(page, 'data');
        if (result) return page;
        else {
            page.status = 404;
            page.ok = false;
            return page
        }
    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return {status: 500, ok: false};

    }
};


