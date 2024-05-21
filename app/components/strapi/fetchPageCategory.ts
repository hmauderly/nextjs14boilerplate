import {concat} from "@tootallnate/quickjs-emscripten/dist/types";

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
export const fetchPageCategories = async () => {

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

    if (hasData(content, 'data')) {
        return content.data;
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




export function getCategoryParents(categoryId: number, categories: Category[]): string[] {
    const parentNames: string[] = [];


    function findCategoryById(id: number): Category | undefined {
        return categories.find(category => category.id === id);
    }

    function addParentNames(categoryId: number): void {
        const category = findCategoryById(categoryId);
        if (category && category.attributes.category.data) {
            const parentCategory = category.attributes.category.data;
            // Add Parent if not Home (id= 5)

                parentNames.push(parentCategory.attributes.name);
                addParentNames(parentCategory.id);


        }
    }

    addParentNames(categoryId);

    return parentNames;
}

export async function getBreadCrumbTitles(content):  string[] {
    let categoryId = content.attributes.category.data.id;
    let categoryLevel = content.attributes.category.data.attributes.level;
    let categoryName = content.attributes.category.data.attributes.name;
    let pageTitle = content.attributes.Title;
    let categoryParentsTitle = [];
    let breadcrumbTitles:string[] = [];



    try {
        // On récupère les catégories
        const categories = await fetchPageCategories();
        console.log("####################")
        console.log(categoryLevel)
        if (categoryLevel > 0) {
            categoryParentsTitle = getCategoryParents(categoryId, categories);
            breadcrumbTitles = concat([...categoryParentsTitle.filter(item => item !== 'Home').reverse(), categoryName, pageTitle]);

        }   else {
            breadcrumbTitles = [pageTitle];
        }
    } catch (e) {
        console.error("There was a problem retrieving categoryParents:", e);
        throw new Error(`HTTP error! There was a problem retrieving fetchPageCategory`);

    }

    return breadcrumbTitles;
}
