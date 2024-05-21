export interface BreadcrumbItem {
    slug: string;
    title: string;
}

export interface Breadcrumb {
    breadcrumb: BreadcrumbItem[];
}

export interface ArticleSmall {
    id: number;
    title: string;
    slug: string;
    PublishDate: Date;
    description: string;
    imageUrl: string;
}

export interface Article {
    fullpath: string,
    title :string,
    content : string,
    summary : string,
    Description : string,
    PublishDate : Date,
    metaKeywords : string,
    htmlContent:string,
    htmlSummary:string,
    categoryId: number,
    categoryName: string,
    breadcrumb: Breadcrumb ,
    Image:ArticleImage,
}
export interface ArticleSmallProps {
    articleSmall: ArticleSmall;
}
export interface ArticleImage {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    hash: string;
    url: string;
    url_xsmall: string;
    url_medium: string;
    url_thumbnail: string;
}

export interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
}

interface ImageAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        large?: ImageFormat;
        medium?: ImageFormat;
        small?: ImageFormat;
        thumbnail?: ImageFormat;
        xlarge?: ImageFormat
        xsmall?: ImageFormat
        [key: string]: ImageFormat | undefined; // Pour permettre l'accès dynamique
    };
}

export interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

export interface ArticleAttributes {
    Title: string;
    Content: string;
    ContentJson: string | null;
    PublishDate: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Keywords: string;
    Description: string;
    Sommaire: string | null;
    Image: {
        data: ImageData[];
    };
}

export interface ArticleData {
    id: number;
    attributes: ArticleAttributes;
}

export interface ApiResponse {
    data: ArticleData;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
