import { Links} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-900 p-4 mt-8">
            <div className="container mx-auto flex justify-center items-center px-4 py-2">
                <p className="text-sm text-zinc-400">&copy; 2024 Dragonware. All rights reserved. Thank you for adventuring with us!</p>
            </div>
            <div className="container mx-auto flex justify-center items-center px-4 py-2">
                <p className="text-sm text-zinc-400"> Made with ❤️ by Ben Redmond & inspired by the work of Gary Gygax.</p>
            </div>
        </footer>
    );
}