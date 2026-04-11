import Card  from "../components/Card";
import NavBar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
            <h1 className="text-5xl font-bold mb-4 text-center">Dragonware</h1>
                <p className="text-zinc-400 text-center p-4">Your digital bag of holding. Characters, maps, and dice at your fingertips.</p>
    

                <main className="flex gap-5 items-center justify-center">
                    <Card
                        title="Character Sheet"
                        description="Create, edit, and track your heroes with notes, stats, and gear."
                        to="/character"
                    />
                    <Card
                        title="Dice Roller"
                        description="Roll any dice combo with quick presets for your favorite checks."
                        to="/dice"
                    />
                    <Card
                        title="Map Builder"
                        description="Sketch encounter grids and plan terrain for every session."
                        to="/map"
                    />
                </main>
        </div>
    );
}