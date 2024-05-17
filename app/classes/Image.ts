export class Image {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    hash: string;
    url: string;

    constructor(
        id: number,
        name: string,
        alternativeText: string | null,
        caption: string | null,
        width: number,
        height: number,
        hash: string,
        url: string
    ) {
        this.id = id;
        this.name = name;
        this.alternativeText = alternativeText;
        this.caption = caption;
        this.width = width;
        this.height = height;
        this.hash = hash;
        this.url = url;
    }
}