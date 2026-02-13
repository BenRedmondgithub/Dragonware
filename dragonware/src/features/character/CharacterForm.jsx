import { useState } from "react";

export default function CharacterForm({ onSubmit }) {
    const [character, setCharacter] = useState({
        name: '',
        classType: '',
        level: '',
        species: '',
        notes: '',
        stats: {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        }
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setCharacter((prev) => ({ ...prev, [name]: value }));
    }

    function handleStatChange(stat, value) {
        setCharacter((prev) => ({
            ...prev,
            stats: {
                ...prev.stats,
                [stat]: value
            }
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(character);
            return;
        }
        console.log('Character created:', character);
    }

    return (
   <form className="grid grid-cols-1" onSubmit={handleSubmit}>
    <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input className="text-black"
            type="text"
            name="name"
            value={character.name}
            onChange={handleChange}
            placeholder="Bob The Ninja"
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Species</label>
        <select className="block mb-1 font-semibold w-full border border-gray-300 rounded px-3 py-2 text-black"
            name="species"
            value={character.species}   
            onChange={handleChange}

        >
            <option value="">Select a species...</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Halfling">Halfling</option>
            <option value="Orc">Orc</option>
            <option value="Tiefling">Tiefling</option>
        </select>
    </div>
    
    <div>
        <label className="block mb-1 font-semibold">Class</label>
        <select 
            value={character.classType} 
            name="classType"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
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

    <div className="grid grid-cols-6 gap-4">
          {(["str", "dex", "con", "int", "wis", "cha"]).map((stat) => (
                        <div
              key={stat}
                            className="flex flex-col gap-1"
                        >
                            <label className="font-semibold uppercase" htmlFor={`stat-${stat}`}>{stat}</label>
                            <input
                                id={`stat-${stat}`}
                                type="number"
                                min="1"
                                max="30"
                                value={character.stats[stat]}
                                onChange={(e) => handleStatChange(stat, Number(e.target.value))}
                                className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                            />
        </div>
        ))}
    </div>
    
    <div>
        <label className="block mb-1 font-semibold ">Level</label>
        <input className="text-black"
            type="number"
            min="1"
            max="20"
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