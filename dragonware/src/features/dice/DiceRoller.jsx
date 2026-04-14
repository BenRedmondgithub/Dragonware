import { useState } from 'react';
// DiceRoller.jsx
export default function DiceRoller() {

    const [rollResult, setRollResult] = useState(null);
    const [message, setMessage] = useState("");
// Function to roll a die with a given number of sides
    function rollDice(sides) {

        const result = Math.floor(Math.random() * sides) + 1;
        setRollResult(result);
        if (result === 20)
                setMessage("Critical Success! god help your foes")
        else if (result === 1)
                setMessage("Critical Failure! tis but a flash wond")
        else 
                setMessage("")
    }
    // Render buttons for different dice and display the result
    return (
        <div className="grid grid-cols-5 gap-4 flex flex-col items-center gap-4 mt-4 p-3">
            <button onClick={() => rollDice(4)}>Roll D4</button>
            <button onClick={() => rollDice(8)}>Roll D8</button>
            <button onClick={() => rollDice(6)}>Roll D6</button>
            <button onClick={() => rollDice(12)}>Roll D12</button>
            <button onClick={() => rollDice(20)}>Roll D20</button>
        
            <div className='col-span-5 py-5'>
            {rollResult !== null && <p className='mt-2 text-white-500 text-center'>Result: {rollResult}</p>}
            </div>
            <div className='col-span-5 py-5'>
            {message && <p className='mt-2 text-white-500 text-center'>{message}</p>}
            </div>
        </div>
    );
}