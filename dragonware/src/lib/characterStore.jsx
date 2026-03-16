const KEY = "dragonware.character";

export function loadCharacter() {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
        return [];
    }

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error("Failed to parse character data:", e);
        return [];
    }
}

export function saveCharacter(character) {
    try {
        localStorage.setItem(KEY, JSON.stringify(character));
    } catch (e) {
        console.error("Failed to save character data:", e);
    }

    return character;
}

export function addCharacter(character) {
    const all = loadCharacter();
    const newChar = {
        id: crypto.randomUUID(),
        ...character,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    const updated = all ? [...all, newChar] : [newChar];
    return saveCharacter(updated);
}

export function deleteCharacter(id) {
    const all = loadCharacter();
    const updated = all.filter((char) => char.id !== id);
    return saveCharacter(updated);
}

export function updateCharacter(id, updates) {
    const all = loadCharacter();
    const updated = all.map((char) => {
        if (char.id === id) {
            return {
                ...char,
                ...updates,
                updatedAt: new Date(),
            };
        }
        return char;
    });
    return saveCharacter(updated);
}