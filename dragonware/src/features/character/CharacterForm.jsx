import { useState } from "react";

export default function CharacterForm() {
    const [name, setName] = useState("");
    const [classType, setClassType] = useState("");
    const [level, setLevel] = useState(1);
}

function handleSubmit(e) {
    const { name, value } = e.target;
    e.preventDefault();
    console.log("Character Created:", { name, classType, level });
}

return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label htmlFor="classType" className="block text-sm font-medium text-gray-300">Class</label>
            <input
                type="text"
                id="classType"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-300">Level</label>
            <input              type="number"
                id="level"
                value={level}
                onChange={(e) => setLevel(Number(e.target.value))}
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create Character</button>
    </form>
);