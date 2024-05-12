export const stringToSlug = (inputText :string) => {

    const slug = inputText;

    slug.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return slug;
};