export function extractIdAndSlug(slug: string): { id: number | null, restOfSlug: string | null } {
    // Utilisation d'une expression régulière pour trouver l'ID au début du slug et le reste du slug après le tiret
    const regex = /^(\d+)(?:-(.*))?$/;
    const match = slug.match(regex);

    // Si une correspondance est trouvée, retourner l'ID et le reste du slug
    if (match && match[1]) {
        return {
            id: match[1],
            restOfSlug: match[2] || null
        };
    }

    // Si aucune correspondance n'est trouvée, retourner null pour les deux valeurs
    return { id: null, restOfSlug: null };
}