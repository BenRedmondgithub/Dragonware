const KEY = "dragonware.character";

export function loadCharacter() {
    const stored = localStorage.getItem(KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error("Failed to parse character data:", e);
            return null;
        }
    }
    return null;
}

export function saveCharacter(character) {
    try {
        localStorage.setItem(KEY, JSON.stringify(character));
    } catch (e) {
        console.error("Failed to save character data:", e);
    } finally {
        return character;
    }

export function addCharacter(character) {
    const current = loadCharacter() || {};
    const updated = { ...current, ...character };
    return saveCharacter(updated);
}

