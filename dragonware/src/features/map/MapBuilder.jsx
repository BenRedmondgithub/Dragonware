import { useState, useMemo, useEffect } from "react";
// Utility function to create a grid based on the specified size
function makeGrid(size) {
    const sizeValue = typeof size === "string" ? size : "10x10";
    const [width, height] = sizeValue.split("x").map((value) => Number(value));
    const safeWidth = Number.isFinite(width) && width > 0 ? width : 10;
    const safeHeight = Number.isFinite(height) && height > 0 ? height : 10;

    return Array.from({ length: safeHeight }, () =>
        Array.from({ length: safeWidth }, () => "empty")
    );
}
// Main component for building a map
export default function MapBuilder({ initialValues, onSave, buttonLabel = "Create Map" }) {
    const [mapName, setMapName] = useState(initialValues?.name ?? "");
    const [mapDescription, setMapDescription] = useState(initialValues?.description ?? "");
    const [gridSize, setGridSize] = useState(initialValues?.size ?? "10x10");
    const [theme, setTheme] = useState(initialValues?.theme ?? "dungeon");
    const [addIn, setAddIn] = useState("");
// State to hold the grid data
    const [grid, setGrid] = useState(() => initialValues?.grid ?? makeGrid(initialValues?.size ?? "10x10"));

    useEffect(() => {
        setGrid(makeGrid(gridSize));
    }, [gridSize]);
// Handle form submission to create the map
    function handleSubmit(e) {
        e.preventDefault();

        const mapData = {
            name: mapName,
            description: mapDescription,
            size: gridSize,
            theme,
            grid,
        };

        if (onSave) {
            onSave(mapData);
            return;
        }

        console.log(mapData);
    }

// Toggle the state of a cell between 'empty' and 'filled'
    function toggleCell(r, c) {
        setGrid((prev) => {
            const next = prev.map((row) => row.slice());
            next[r][c] = next[r][c] === 'empty' ? (addIn || 'filled') : 'empty';
            return next;
        });
    }
// Memoize the tile classes based on the selected theme for performance optimization
    const tileClass = useMemo(() => {
        const base = "w-6 h-6 border border-gray-300";
        const empty = 
            theme === "dungeon" ? "bg-gray-700" :
            theme === "castle" ? "bg-gray-500" :
            theme === "forest" ? "bg-green-700" :
            theme === "cave" ? "bg-gray-600" : "bg-gray-700";
        const filled = 
            theme === "dungeon" ? "bg-gray-300" :
            theme === "castle" ? "bg-gray-200" :
            theme === "forest" ? "bg-green-300" :
            theme === "cave" ? "bg-gray-400" : "bg-gray-300";

        // Define add-in classes for different elements that can be added to the map
        const addInClass = {
            floor : {label: "Floor", render: () => ""},
            player: {label: "Player", render: () => "🟢"},
            npc: {label: "NPC", render: () => "👤"},
            skeleton: {label: "Skeleton", render: () => "💀"},
            monster: {label: "Monster", render: () => "👹"},
            treasure: {label: "Treasure", render: () => "💎"},
            undead: {label: "Undead", render: () => "🧟"},
            trap: {label: "Trap", render: () => "🪤"},
            dragon: {label: "Dragon", render: () => "🐉"},
            boss: {label: "Boss", render: () => "😈"}
        }


        return { base, empty, filled, addInClass };

    }, [theme, addIn]);
// Render the form and the grid
// Then all the web stuff I know
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                <div className="text-2xl font-bold mb-4 text-white">Map Builder</div>
                <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="block mb-1 font-semibold text-xl">Map Name</label>
                    <input className="text-black"
                        type="text"
                        value={mapName}
                        onChange={(e) => setMapName(e.target.value)}
                        placeholder="Dungeon of Doom"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-xl">Description</label>
                    <textarea
                        className="text-black"
                        value={mapDescription}
                        onChange={(e) => setMapDescription(e.target.value)}
                        placeholder="A dark and dangerous dungeon filled with traps and monsters."
                        rows={4}
                    />
                </div>
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-xl">Grid Size</label>
                    <div className="grid grid-cols-3 gap-5">
                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        value={gridSize}
                        onChange={(e) => setGridSize(e.target.value)}
                        placeholder="Select a grid size..."
                    >
                        <option value="5x5">5x5</option>
                        <option value="10x10">10x10</option>
                        <option value="20x20">20x20</option>
                        <option value="30x30">30x30</option>
                    </select>
                

                <div>
                    <label className="block mb-1 font-semibold text-xl">Theme</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        placeholder="Select a theme..."
                    >
                        <option value="dungeon">Dungeon</option>
                        <option value="forest">Forest</option>
                        <option value="castle">Castle</option>
                        <option value="cave">Cave</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-xl">Add-ins</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        value={addIn}
                        onChange={(e) => setAddIn(e.target.value)}
                        placeholder="Select an element to add..."
                    >
                        <option value="floor">Floor</option>
                        <option value="player">Player</option>
                        <option value="npc">NPC</option>
                        <option value="skeleton">Skeleton</option>
                        <option value="monster">Monster</option>
                        <option value="treasure">Treasure</option>
                        <option value="undead">Undead</option>
                        <option value="trap">Trap</option>
                        <option value="boss">Boss</option>
                        <option value="dragon">Dragon</option>
                    </select>
                </div>  
                
                </div>


                </div>



                {grid && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4 text-white">Map Grid</h2>
                    <div className="inline-block border border-gray-300 p-1 bg-gray-100 rounded-lg">
                        {grid.map((row, r) => (
                            <div key={r} className="flex">
                                {row.map((cell, c) => (
                                    <div
                                        key={c}
                                        className={`${tileClass.base} ${cell === 'empty' ? tileClass.empty : tileClass.filled} cursor-pointer`} 
                                        onClick={() => toggleCell(r, c)}
                                    >
                                        {cell !== 'empty' && cell !== 'filled' ? tileClass.addInClass[cell]?.render() : null}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                )}
                <button>{buttonLabel}</button>
            </form>
        </div>
    );
}