import React from 'react';
import { Character } from './rickAndMortyData';
import './CharacterList.css'; // Importiere die CSS-Datei für Stile

interface CharacterListProps {
    characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className="character-list">
            {characters.map((character) => (
                <div key={character.id} className="character-card">
                    <img src={character.image} alt={character.name} className="character-image" />
                    <div className="character-info">
                        <p className="character-name">{character.name}</p>
                        <p className="character-species">{character.species}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
