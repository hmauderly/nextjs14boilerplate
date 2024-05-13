export const getPathFromSlug = (slug:string[]) => {

    let  path = process.env.BASE_URL;
    let count=0;

    slug.forEach(item => {
        path +=item;
        count+=1;
        if (count<slug.length) {path+="/"}
    })

    return path;
};

export default getPathFromSlug;