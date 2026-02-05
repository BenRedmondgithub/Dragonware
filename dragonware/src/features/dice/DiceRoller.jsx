import { useState } from 'react';

export default function DiceRoller() {

    const [rollResult, setRollResult] = useState(null);
    const [message, setMessage] = useState("");

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
    return (
        <div className="flex flex-col items-center gap-4 mt-4">
            <button onClick={() => rollDice(4)}>Roll D4</button>
            <button onClick={() => rollDice(8)}>Roll D8</button>
            <button onClick={() => rollDice(6)}>Roll D6</button>
            <button onClick={() => rollDice(12)}>Roll D12</button>
            <button onClick={() => rollDice(20)}>Roll D20</button>

            {rollResult !== null && <p>Result: {rollResult}</p>}
            {message && <p className='mt-2 text-white-500' >{message}</p>}
        </div>
    );
}