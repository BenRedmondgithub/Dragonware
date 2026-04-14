import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteMap, loadMap } from "../../lib/mapStore";

export default function MapListPage() {
    const [maps, setMaps] = useState([]);

    function refresh() {
        setMaps(loadMap());
    }

    useEffect(() => {
        refresh();
    }, []);

    function handleDelete(id) {
        deleteMap(id);
        refresh();
    }

    return (
        <div className="flex flex-col items-center justify-center grid-cols-1 gap-6">
            <h1>Map List</h1>
            <Link to="/map-builder-create" className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded">
                + New Map
            </Link>
            <div className="mt-8 space-y-3">
            {maps.length === 0 ? (
                <p>No maps saved yet.</p>
            ) : (
                <ul>
                    {maps.map((map) => (
                        <li key={map.id} className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/40">
                            <div>
                                <strong>{map.name}</strong>
                                <p>{map.description}</p>
                            </div>

                            <div className="flex gap-5">
                                <Link to={`/map/${map.id}`} className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700">Edit</Link>
                                <button onClick={() => handleDelete(map.id)} className="px-3 py-1 rounded bg-red-700 hover:bg-red-600">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    );
}
