const API_URL = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

function hasData(json: any, key: string): boolean {
    return !!(json[key] && Array.isArray(json[key]) && json[key].length > 0);
}


export const fetchPages = async (categoryId:number,page : number, pageSize:number) => {
    const paginationPage = "&pagination[" + page+"]";
    const paginationSize = "&pagination["+pageSize+"]";
    const paginationCount = "&pagination[false]";

    const url = new URL(API_URL + "/api/pages?filters[category][id][$eq]=" + categoryId+"&sort[0]=id:desc&fields[0]=title&fields[1]=PublishDate&fields[2]=description&fields[3]=slug&populate=*"+ paginationPage + paginationSize + paginationCount);
    let content = null;

    const options = {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        cache: 'no-store',
        revalidate: 5,
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
    let result = hasData(content, 'data');

    if (result) return content;
    else {
        content.status = 404;
        content.ok = false;
        return content
    }
};


