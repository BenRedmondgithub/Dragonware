import { useNavigate, useParams  } from "react-router-dom";
import MapBuilder from "./MapBuilder";
import { loadMap, updateMap } from "../../lib/mapStore";

export default function MapBuilderEditPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const allMaps = loadMap();
    const map = Array.isArray(allMaps)
        ? allMaps.find((m) => m.id === id)
        : null;

    if (!map) {
        return <div>Map not found</div>;
    }

    const handleSubmit = (updatedMap) => {
        if (!updatedMap.name.trim()) {
            alert("Name cannot be empty");
            return;
        }
        const updatedValues = {
            ...updatedMap,
            updatedAt: Date.now()
        };
        updateMap(id, updatedValues);
        navigate('/map');
    };

    return <div>
        <h1>Edit Map</h1>
        <MapBuilder initialValues={map} onSave={handleSubmit} />
    </div>;
}