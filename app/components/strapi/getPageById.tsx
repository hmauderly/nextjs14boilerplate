const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;



// Fonction pour obtenir une page par ID

export const getPageById = async (id: number) => {

    const url = `${API_URL}/api/pages/${id}`;

    const options = {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        revalidate: 0
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const articles = await response.json();
        return articles;
    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return [];
    }
};

