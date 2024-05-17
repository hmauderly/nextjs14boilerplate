import {Image} from './Image';
import {BreadCrumb} from './BreadCrumb';
import {CategoryParents} from './CategoryParents';

class Page {
    Title: string;
    Content: string;
    PublishDate: string;
    order: number;
    Keywords: string;
    slug: string;
    Description: string;
    Sommaire: string;
    categoryId: number;
    CategoryParents: CategoryParents;
    BreadCrumb: BreadCrumb;
    Image: Image;

    constructor(
        Title: string,
        Content: string,
        PublishDate: string,
        order: number,
        Keywords: string,
        slug: string,
        Description: string,
        Sommaire: string,
        categoryId: number,
        CategoryParents: CategoryParents,
        BreadCrumb: BreadCrumb,
        Image: Image
    ) {
        this.Title = Title;
        this.Content = Content;
        this.PublishDate = PublishDate;
        this.order = order;
        this.Keywords = Keywords;
        this.slug = slug;
        this.Description = Description;
        this.Sommaire = Sommaire;
        this.categoryId = categoryId;
        this.BreadCrumb= BreadCrumb;
        this.CategoryParents= CategoryParents;
        this.Image = Image;
    }
}