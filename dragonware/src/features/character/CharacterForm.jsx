import { useState } from "react";

export default function CharacterForm() {
    const [character, setCharacter] = useState({
        name: '',
        classType: '',
        level: '',
        species: '',
        notes: ''
    });


function handleSubmit(e) {
    const { name, value } = e.target;
    e.preventDefault();
    setCharacter((prev) => ({ ...prev, [name]: value }));
}

return (
   <form className="flex flex-col gap-4 mt-4">
    <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
            type="text"
            name="name"
            value={character.name}
            placeholder="Bob The Ninja"
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Species</label>
        <input
            type="text"
            name="species"
            value={character.species}   
            placeholder="Human, Elf, Dwarf..."
        />
    </div>
    
    <div>
        <label className="block mb-1 font-semibold">Class</label>
        <input
            type="text"
            name="Role/Archtype"
            value={character.classType}
            placeholder="Barbarian, Wizard, Rogue..."
        />
    </div>
    <div>
        <label className="block mb-1 font-semibold">Level</label>
        <input
            type="text"
            name="level"
            value={character.level}
            placeholder="1-20"
        />
    </div>

    <div>
    <label className="block mb-1 font-semibold">Notes</label>
    <textarea
        name="notes"
        value={character.notes}
        onChange={handleSubmit}
        placeholder="Backstory, personality, and other details..."
    />
    </div>

    <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Character
        </button>
    </div>

   </form>
)
}