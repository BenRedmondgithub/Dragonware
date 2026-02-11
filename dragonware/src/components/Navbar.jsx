import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="w-full bg-zinc-900 p-4 mb-8">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-zinc-100">Dragonware</Link>
                <div className="space-x-4">
                    <Link to="/character" className="text-zinc-300 hover:text-zinc-100">Characters</Link>
                    <Link to="/dice" className="text-zinc-300 hover:text-zinc-100">Dice Roller</Link>
                    <Link to="/map" className="text-zinc-300 hover:text-zinc-100">Map Builder</Link>
                </div>
            </div>
        </nav>
    );
}