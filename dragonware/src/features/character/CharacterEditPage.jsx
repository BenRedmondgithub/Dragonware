import { useNavigate, useParams } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import { loadCharacter, updateCharacter } from "../../lib/characterStore";

export default function CharacterEditPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const allCharacters = loadCharacter();
    const character = Array.isArray(allCharacters)
        ? allCharacters.find((char) => char.id === id)
        : null;

    if (!character) {
        return <div>Character not found</div>;
    }

    const handleSubmit = (updatedCharacter) => {
        const levelValue = Number(updatedCharacter.level);

        if (Number.isNaN(levelValue)) {
            alert("Level must be a number");
            return;
        }

        if (levelValue < 1 || levelValue > 20) {
            alert("Level must be between 1 and 20");
            return;
        }

        if (!updatedCharacter.name.trim()) {
            alert("Name cannot be empty");
            return;
        }

        const updatedValues = {
            ...updatedCharacter,
            level: levelValue,
            updatedAt: Date.now()
        };

        updateCharacter(id, updatedValues);
        navigate('/character/characterList');
    };

    return <div>
        <h1>Edit Character</h1>
        <CharacterForm initialValues={character} onSave={handleSubmit} />
    </div>;
}