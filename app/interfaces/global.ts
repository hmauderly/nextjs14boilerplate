
export interface Page {
    fullslug : [];
    fullpath: string;
    title : string;
    content : string;
    summary : string;
    metaDescription : string;
    PublishDate : string;
    metaKeywords : string;
    htmlContent:string;
    htmlSummary:string;
    categoryId: number;
    categoryName: string;

    status: number;
    categoryParents: string[];
    ok: boolean;
    breadcrumbItems: BreadcrumbItem[];

}
interface BreadcrumbItem {
    slug: string;
    title: string;
}

export interface Article {

    id: number;
    fullSlug:  string;
    slug:  string;
    title : string;
    content : string;
    metaDescription : string;
    PublishDate : string;
    metaKeywords : string;
    htmlContent:string;
    htmlSummary:string;



}
