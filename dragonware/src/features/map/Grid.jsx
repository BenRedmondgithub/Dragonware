import { useState } from "react";

export default function MapPage() {
    const [mapName, setMapName] = useState("");
    const [mapDescription, setMapDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Map Created:", { mapName, mapDescription });
    }

    return (
        <div>
            <h1>Map Builder</h1>
            <p>Design and customize your own maps for your campaigns.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                <div>
                    <label className="block mb-1 font-semibold">Map Name</label>
                    <input
                        type="text"
                        value={mapName}
                        onChange={(e) => setMapName(e.target.value)}
                        placeholder="Dungeon of Doom"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Description</label>
                    <textarea
                        value={mapDescription}
                        onChange={(e) => setMapDescription(e.target.value)}
                        placeholder="A dark and dangerous dungeon filled with traps and monsters."
                        rows={4}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Create Map
                </button>
            </form>
        </div>
    );
}