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
        <div>
            <h1>Map List</h1>
            <Link to="/map-builder-create">+ New Map</Link>

            {maps.length === 0 ? (
                <p>No maps saved yet.</p>
            ) : (
                <ul>
                    {maps.map((map) => (
                        <li key={map.id}>
                            <div>
                                <strong>{map.name}</strong>
                                <p>{map.description}</p>
                            </div>

                            <div>
                                <Link to={`/map/${map.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(map.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
