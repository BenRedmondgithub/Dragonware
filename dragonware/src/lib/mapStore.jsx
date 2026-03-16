const KEY = "dragonware.map";

export function loadMap() {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
        return [];
    }

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error("Failed to parse map data:", e);
        return [];
    }
}

export function saveMap(maps) {
    try {
        localStorage.setItem(KEY, JSON.stringify(maps));
    } catch (e) {
        console.error("Failed to save map data:", e);
    }

    return maps;
}

export function addMap(map) {
    const all = loadMap();
    const newMap = {
        id: crypto.randomUUID(),
        ...map,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    return saveMap([...all, newMap]);
}

export function deleteMap(id) {
    const all = loadMap();
    const updated = all.filter((map) => map.id !== id);
    return saveMap(updated);
}

export function updateMap(id, updates) {
    const all = loadMap();
    const updated = all.map((map) => {
        if (map.id === id) {
            return {
                ...map,
                ...updates,
                updatedAt: new Date(),
            };
        }

        return map;
    });

    return saveMap(updated);
}
