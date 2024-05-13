export const stringToSlug = (inputText :string) => {

    let slug = inputText;

    slug.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/\s+/g, '-');

    slug = slug.split(' ').join('-');
    return slug;
};

export default stringToSlug;