export const getPathFromId = (id:number, slug:string) => {

    let  path = process.env.BASE_URL;
    path += "articles/"+id+"-"+slug;

    return path;
};

export default getPathFromId;