import { useState } from "react";

export default function CharacterForm() {
    const [character, setCharacter] = useState({
        name: '',
        classType: '',
        level: '',
        species: '',
        notes: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setCharacter((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Character created:', character);
    }

    return (
   <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
    <div>
        <h1>Character Creation</h1>
        <label className="block mb-1 font-semibold">Name</label>
        <input
            type="text"
            name="name"
            value={character.name}
            onChange={handleChange}
            placeholder="Bob The Ninja"
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Species</label>
        <input
            type="text"
            name="species"
            value={character.species}   
            onChange={handleChange}
            placeholder="Human, Elf, Dwarf..."
        />
    </div>
    
    <div>
        <label className="block mb-1 font-semibold">Class</label>
            <select value={character.classType} 
            name="classType"
            onChange={handleChange}
      className="w-full border border-gray-300 rounded px-3 py-2">

        <option value="Barbarian">Barbarian</option>
        <option value="Wizard">Wizard</option>
        <option value="Rogue">Rogue</option>
        <option value="Cleric">Cleric</option>
        <option value="Fighter">Fighter</option>
        <option value="Ranger">Ranger</option>

      </select>
    </div>
    
    <div>
        <label className="block mb-1 font-semibold">Level</label>
        <input
            type="text"
            name="level"
            value={character.level}
            onChange={handleChange}
            placeholder="1-20"
        />
    </div>

    <div>
    <label className="block mb-1 font-semibold">Notes</label>
    <textarea
        name="notes"
        value={character.notes}
        onChange={handleChange}
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