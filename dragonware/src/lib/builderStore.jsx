const KEY = "dragonware.builder";

export function loadBuilder() {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
        return [];
    }

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error("Failed to parse builder data:", e);
        return [];
    }
}

export function saveBuilder(builder) {
    try {
        localStorage.setItem(KEY, JSON.stringify(builder));
    } catch (e) {
        console.error("Failed to save builder data:", e);
    }

    return builder;
}

export function addBuilder(builder) {
    const all = loadBuilder();
    const newBuilder = {
        id: crypto.randomUUID(),
        ...builder,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    const updated = all ? [...all, newBuilder] : [newBuilder];
    return saveBuilder(updated);
}

export function deleteBuilder(id) {
    const all = loadBuilder();
    const updated = all.filter((builder) => builder.id !== id);
    return saveBuilder(updated);
}

export function getBuilderById(id) {
    const all = loadBuilder();
    return all.find((builder) => builder.id === id) || null;
}

export function getBuilderByName(name) {
    const all = loadBuilder();
    return all.find((builder) => builder.name === name) || null;
}

export function gridBuilderExists(name) {
    const all = loadBuilder();
    return all.some((builder) => builder.name === name);
}

export function updateBuilder(id, updates) {
    const all = loadBuilder();
    const updated = all.map((builder) => {
        if (builder.id === id) {
            return {
                ...builder,
                ...updates,
                updatedAt: new Date(),
            };
        }
        return builder;
    });
    return saveBuilder(updated);
}