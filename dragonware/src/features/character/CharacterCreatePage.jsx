import { useNavigate } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import { addCharacter } from "../../lib/characterStore";

export default function CharacterCreatePage() {
    const navigate = useNavigate();

    const handleSubmit = (character) => {
        const levelValue = Number(character.level);

        if (Number.isNaN(levelValue)) {
            alert("Level must be a number");
            return;
        }

        if (levelValue < 1 || levelValue > 20) {
            alert("Level must be between 1 and 20");
            return;
        }

        if (!character.name.trim()) {
            alert("Name cannot be empty");
            return;
        }

        const newChar = {
            ...character,
            level: levelValue,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        addCharacter(newChar);
        navigate('/character/characterList');
    };

    return <div>
        <h1>Create New Character</h1>
        <CharacterForm onSave={handleSubmit} /> 
        </div>
}