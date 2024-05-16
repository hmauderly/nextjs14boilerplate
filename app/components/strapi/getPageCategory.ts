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
type Parents = string[];

// export async function getPageBySlug(id: number) {
export const getPageCategory = async (id: number) => {

    const url = new URL(API_URL + "/api/categories?pagination[pageSize]=100&populate=*");

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

        const valid = hasData(content, 'data');

        const parents:Parents = getCategoryParents(id, content.data);

        if (valid) {
            return {status: 200, ok: true, parents}
        }
        else {
            return {status: 404, ok: false, parents};
        }

    } catch (e) {
        console.error("There was a problem retrieving articles:", e);
        return {status: 404, ok: false, parents: []};

    }
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
