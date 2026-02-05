import { useState } from "react";

export default function CharacterForm() {
    const [character, setCharacter] = useState({
        name: '',
        classType: '',
        level: '',
    });


function handleSubmit(e) {
    const { name, value } = e.target;
    e.preventDefault();
    setCharacter((prev) => ({ ...prev, [name]: value }));
}

return (
   <form className="flex flex-col gap-4 mt-4">
    <div>
        <label>Name</label>
        <input
            type="text"
        />
    </div>
    <div>
        <label>Class</label>
        <input
            type="text"
        />
    </div>
    <div>
        <label>Level</label>
        <input
            type="text"
        />
    </div>

    <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Character
        </button>
    </div>

   </form>

)
}