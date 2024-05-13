import Protocol from "devtools-protocol";
import integer = Protocol.integer;

export interface Page  {
    title: string;
    content: string;
    htmlContent: string;
    metaDescription: string;
    metaKeywords: string;
    PublishDate: string;
    slug: string;
    error: boolean;

}



export interface PageRemoteContent  {
    params: {
        id: integer;
        attributes: {
            Title: string;
            Content: string;
            ContentJson: string;
            publishedAt: string;
            Keywords: string;
            Slug: string;
            Description: string;
            order: integer;


        }
    };

}
/*

export interface Props  {
    params: { id: string, slug: string,path: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
*/
