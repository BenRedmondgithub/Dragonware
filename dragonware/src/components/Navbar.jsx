// import navbar component
import { Link } from "react-router-dom";
//create navbar 
export default function NavBar() {
    return (
        <nav className="w-full bg-zinc-900 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                <Link to="/" className="text-2xl font-bold text-zinc-100"> Dragonware 🐉 </Link>
                <div className="space-x-4">
                    <Link to="/character" className="text-zinc-300 hover:text-zinc-100">Characters</Link>
                    <Link to="/dice" className="text-zinc-300 hover:text-zinc-100">Dice Roller</Link>
                    <Link to="/map" className="text-zinc-300 hover:text-zinc-100">Map Builder</Link>
                </div>
            </div>
        </nav>
    );
}