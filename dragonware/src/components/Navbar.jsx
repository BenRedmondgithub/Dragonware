// import navbar component
import { Link } from "react-router-dom";
//create navbar 
export default function NavBar() {
    return (
        <nav className="bg-zinc-900 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-8">
                <Link to="/" className="text-4xl font-bold text-zinc-100"> Dragonware 🐉 </Link>
                <div className="space-x-8">
                    <Link to="/character" className="text-2xl text-zinc-300 hover:text-zinc-100">Characters</Link>
                    <Link to="/dice" className="text-2xl text-zinc-300 hover:text-zinc-100">Dice Roller</Link>
                    <Link to="/map" className="text-2xl text-zinc-300 hover:text-zinc-100">Map Builder</Link>
                </div>
            </div>
        </nav>
    );
}