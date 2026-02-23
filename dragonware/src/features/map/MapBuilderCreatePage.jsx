import { useNavigate } from "react-router-dom";
import MapBuilder from "./MapBuilder";
import { addMap } from "../../lib/mapStore";

export default function MapBuilderCreate() {
    const navigate = useNavigate();
    const handleSubmit = (mapData) => {
        if (!mapData.name.trim()) {
            alert("Name cannot be empty");
            return;
        }
        const newMap = {
            ...mapData,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        addMap(newMap);
        navigate('/map');
    };

    return <div>
        <h1>Create New Map</h1>
        <MapBuilder onSave={handleSubmit} />
    </div>;
}
