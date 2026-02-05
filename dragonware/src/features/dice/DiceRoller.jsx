import { useState } from 'react';

export default function DiceRoller() {

    const [rollResult, setRollResult] = useState(null);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");

    function rollDice(sides) {

        const result = Math.floor(Math.random() * sides) + 1;
        setRollResult(result);
        if (result === 20)
                setMessage1("Critical Success! god help what you hit.")
        else if (result === 1)
                setMessage2("Critical Failure! I can only imagine.")
        else 
                setMessage1("")
                setMessage2("")

    }
    return (
        <div className="flex flex-col items-center gap-4 mt-4">
            <button onClick={() => rollDice(4)}>Roll D4</button>
            <button onClick={() => rollDice(8)}>Roll D8</button>
            <button onClick={() => rollDice(6)}>Roll D6</button>
            <button onClick={() => rollDice(12)}>Roll D12</button>
            <button onClick={() => rollDice(20)}>Roll D20</button>

            {rollResult !== null && <p>Result: {rollResult}</p>}
            {message1 && <p className='mt-2 text-green-500' >{message1}</p>}
            {message2 && <p className='mt-2 text-red-500' >{message2}</p>}
        </div>
    );
}