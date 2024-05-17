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
export const fetchPageCategory = async (id: number) => {

    const url = new URL(API_URL + "/api/categories?pagination[pageSize]=100&populate=*");
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

    const parents = getCategoryParents(id, content.data);

    if (hasData(content, 'data')) {
        return parents;
    }
    else throw new Error(`HTTP error! There was a problem retrieving page category`);


};

interface Category {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        level: number;
        category: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                    level: number;
                };
            } | null;
        };
        image: {
            data: null;
        };
    };
}




function getCategoryParents(categoryId: number, categories: Category[]): string[] {
    const parentNames: string[] = [];

    function findCategoryById(id: number): Category | undefined {
        return categories.find(category => category.id === id);
    }

    function addParentNames(categoryId: number): void {
        const category = findCategoryById(categoryId);
        if (category && category.attributes.category.data) {
            const parentCategory = category.attributes.category.data;
            parentNames.push(parentCategory.attributes.name);
            addParentNames(parentCategory.id);
        }
    }

    addParentNames(categoryId);

    return parentNames;
}
