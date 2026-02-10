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
        <select 
            value={character.classType} 
            name="classType"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
        >
            <option value="">Select a class...</option>
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
        <label htmlFor="notes" className="block mb-1 font-semibold">Notes</label>
        <textarea
            name="notes"
            value={character.notes}
            onChange={handleChange}
            placeholder="Backstory, personality, and other details..."
            className="w-full rounded border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            rows="4"
        />
    </div>

    <div>
        <button type="submit" className="bg-teal-400 text-white px-4 py-2 rounded">
            Create Character
        </button>
    </div>

   </form>
   );
}