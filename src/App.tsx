import React, { useState, useEffect } from 'react';
import { Character, fetchCharacters } from './rickAndMortyData';
import CharacterList from './CharacterList';

const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data);
                setError('');
            } catch (error) {
                setError('Fehler beim Abrufen der Charaktere. Bitte versuchen Sie es später erneut.');
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setError('');
    };

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Rick and Morty Galerie</h1>
            <input
                type="text"
                placeholder="Charakter suchen nach Name..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {error && <p>{error}</p>}
            <CharacterList characters={filteredCharacters} />
        </div>
    );
};

export default App;
