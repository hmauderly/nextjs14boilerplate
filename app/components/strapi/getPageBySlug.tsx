
const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;



// Fonction pour obtenir une page par ID

// export async function getPageBySlug(id: number) {
export const getPageBySlug = async (slug: string) => {

    const url = `${API_URL}/articles?slug=${slug}`;
    const options = {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        revalidate: 0
    };
    try {
        const response = await fetch(url,options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const article = await response.json();
        return article;
    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return [];
    }
};


