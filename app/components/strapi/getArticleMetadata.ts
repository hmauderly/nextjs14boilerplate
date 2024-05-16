const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

function hasData(json: any, key: string): boolean {
    return !!(json[key] && Array.isArray(json[key]) && json[key].length > 0);
}


export const getArticleMetadata = async (id:number, slug: string) => {

    const url = new URL(API_URL + "/api/articles?filters[id][$eq]=" + id);
    let content = null;

    const options = {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        cache: 'no-store',
        revalidate: 0,
    };
    try {
        const response = await fetch(url.href,options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        content = await response.json();

    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return {status: 500, ok: false};
    }

    if (hasData(content, 'data')) {
        if (content.data[0].attributes.slug === slug) {
            content.status = 200;
            content.ok = true;
            return content;
        }
        else return {status: 301, ok: false};
    }
    else return {status: 404, ok: false};
};


