export interface Character {
    id: number;
    name: string;
    species: string;
    image: string;
}

let cachedCharacters: Character[] | null = null;

export const fetchCharacters = async (): Promise<Character[]> => {
    if (cachedCharacters) {
        return cachedCharacters;
    }

    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        const characters = data.results.map((character: Character, index: number) => ({
            id: index + 1,
            name: character.name,
            species: character.species,
            image: character.image
        }));
        cachedCharacters = characters;
        return characters;
    } catch (error) {
        console.error('Fehler beim Abrufen der Charaktere:', error);
        return [];
    }
};
