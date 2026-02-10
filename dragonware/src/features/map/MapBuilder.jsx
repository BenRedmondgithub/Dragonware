import { useState, useMemo } from "react";

export default function MapBuilder() {
    const [mapName, setMapName] = useState("");
    const [mapDescription, setMapDescription] = useState("");
    const [gridSize, setGridSize] = useState("10x10");
    const [theme, setTheme] = useState("dungeon");

    const [grid, setGrid] = useState(null);
    
    function handleSubmit(e) {
        e.preventDefault();

        // Create a basic grid structure
        const [width, height] = gridSize.split('x').map(Number);
        const newGrid = Array(height).fill(null).map(() => Array(width).fill('empty'));
        setGrid(newGrid);

        console.log(mapName, mapDescription, gridSize, theme);
    }


    function toggleCell(r, c) {
        setGrid((prev) => {
            const next = prev.map((row) => row.slice());
            next[r][c] = next[r][c] === 'empty' ? 'filled' : 'empty';
            return next;
        });
    }

    const tileClass = useMemo(() => {
        const base = "w-6 h-6 border border-gray-300";
        const empty = 
            theme === "dungeon" ? "bg-gray-700" :
            theme === "castle" ? "bg-gray-500" :
            theme === "forest" ? "bg-green-700" : "bg-gray-700";
        const filled = 
            theme === "dungeon" ? "bg-gray-300" :
            theme === "castle" ? "bg-gray-200" :
            theme === "forest" ? "bg-green-300" : "bg-gray-300";

        return { base, empty, filled };
    }, [theme]);

    return (
        <div>
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

                <div>
                    <label className="block mb-1 font-semibold">Grid Size</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={gridSize}
                        onChange={(e) => setGridSize(e.target.value)}
                    >
                        <option value="10x10">10x10</option>
                        <option value="20x20">20x20</option>
                        <option value="30x30">30x30</option>
                    </select>
                </div>

                <div>

                    <label className="block mb-1 font-semibold">Theme</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        <option value="dungeon">Dungeon</option>
                        <option value="forest">Forest</option>
                        <option value="castle">Castle</option>
                    </select>
                </div>

                {grid && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">{mapName || "Your Map"}</h3>
                    <div className="inline-block border-2 border-gray-400 p-2 bg-white">
                        {grid.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex">
                                {row.map((cell, colIndex) => (
                                    <div
                                        key={`${rowIndex}-${colIndex}`}
                                        className={`${tileClass.base} ${
                                            cell === 'empty' ? tileClass.empty : tileClass.filled
                                        } cursor-pointer hover:opacity-75`}
                                        onClick={() => toggleCell(rowIndex, colIndex)}
                                        title={`Row ${rowIndex + 1}, Col ${colIndex + 1}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                )}
                <button>Create Map</button>
            </form>
        </div>
    );
}