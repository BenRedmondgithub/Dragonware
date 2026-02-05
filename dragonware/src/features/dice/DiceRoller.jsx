import { useState } from 'react';

export default function DiceRoller() {

    const [rollResult, setRollResult] = useState(null);
    const [message, setMessage] = useState("");
    
    function rollDice(sides) {
        const result = Math.floor(Math.random() * sides) + 1;
        setRollResult(result);
        if (result === 20)
                setMessage("Critical Success! god help what you hit.")
        else if (result === 1)
                setMessage("Critical Failure! I can only imagine.")
        else 
                setMessage("")

    }
    return (
        <div>
            <button onClick={() => rollDice(4)}>Roll D4</button>
            <button onClick={() => rollDice(8)}>Roll D8</button>
            <button onClick={() => rollDice(6)}>Roll D6</button>
            <button onClick={() => rollDice(12)}>Roll D12</button>
            <button onClick={() => rollDice(20)}>Roll D20</button>
            {rollResult !== null && <p>Result: {rollResult}</p>}
            {message && <p className='mt-2 text-red-500' >{message}</p>}
        </div>
    );
}