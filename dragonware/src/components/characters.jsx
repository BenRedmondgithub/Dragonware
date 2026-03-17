import { useEffect, useState } from "react";

function Characters() {
    const [characters, setCharacters] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3000/api/characters")
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) => console.error("Error fetching characters:", error));
    }, []);

    return (
        <div>
            <h1>Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        {character.name} -
                        {character.class} - 
                        {character.species} - 
                        Level {character.level}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Characters;