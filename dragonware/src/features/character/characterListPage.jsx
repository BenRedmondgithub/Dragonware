import { Link } from "react-router-dom";
import { deleteCharacter, loadCharacter } from "../../lib/characterStore";
import { useEffect, useState } from "react";
import Characters from "../../components/characters";
import db from "../../../dragonware-backend/database";

export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]);

  function refresh() {
    setCharacters(loadCharacter());
  }

  useEffect(() => {
    refresh();
  }, []);

  function handleDelete(id) {
    deleteCharacter(id);
    refresh();
  }

  db.run(
    `CREATE TABLE IF NOT EXISTS characters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        classType TEXT NOT NULL,
        species TEXT NOT NULL,
        level INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) {
            console.error('Error ensuring characters table exists:', err.message);
        }   else {
            console.log('Characters table is ready.');
        }
    }
);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Characters</h1>
        <Link
          to="/character/characterCreate"
          className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded"
        >
          + New Character
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        {characters.length === 0 ? (
          <p className="text-zinc-400">No characters saved yet.</p>
        ) : (
          characters.map((c) => (
            <div key={c.id} className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">{c.name}</div>
                  <div className="text-sm text-zinc-400">
                    {c.species} • {c.classType} • Lv {c.level}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/character/${c.id}`}
                    className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="px-3 py-1 rounded bg-red-700 hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}