const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

// export async function getPageBySlug(id: number) {
export const getPageMetadata = async (slug: string) => {


    const url = new URL(API_URL + "/api/pages?filters[slug][$eq]=" + slug[slug.length-1]+"&fields[0]=title&fields[1]=description&fields[2]=keywords");

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

        return page;
    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return [];
    }
};


