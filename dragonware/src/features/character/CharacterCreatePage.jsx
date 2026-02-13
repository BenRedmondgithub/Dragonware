import { useNavigate } from "react-router-dom";
import CharacterForm from "./CharacterForm";

const KEY = "dragonware.characters";

function load (){
    const data = localStorage.getItem(KEY);
    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function save (list) {
    localStorage.setItem(KEY, JSON.stringify(list));
}

export default function CharacterCreate() {
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
            id: crypto.randomUUID(),
            ...character,
            level: levelValue,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        const existing = load();
        save([...existing, newChar]);
        navigate('/character');
    };

    return <div>
        <h1>Create New Character</h1>
        <CharacterForm onSubmit={handleSubmit} /> </div>
}