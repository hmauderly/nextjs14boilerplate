const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

function hasData(json: any, key: string): boolean {
    return !!(json[key] && Array.isArray(json[key]) && json[key].length > 0);
}


export const getPage = async (slug: string[]) => {

    const url = new URL(API_URL + "/api/pages?filters[slug][$eq]=" + slug[slug.length-1]+"&populate=*");
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

        const content = await response.json();
        let result = hasData(content, 'data') && (content.data[0].attributes.slug === slug[slug.length - 1]);

        if (result) return content;
        else {
            content.status = 404;
            content.ok = false;
            return content
        }
    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return {status: 500, ok: false};
    }
};


