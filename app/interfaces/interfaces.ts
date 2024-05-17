export interface BreadcrumbItem {
    slug: string;
    title: string;
}

export interface BreadcrumbProps {
    breadcrumb: BreadcrumbItem[];
}

export interface Article {
    id: number;
    title: string;
    slug: string;
    PublishDate: Date;
    description: string;

}
export interface ArticleProps {
    article: Article;
}
