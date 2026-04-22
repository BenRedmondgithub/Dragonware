import Card  from "../components/Card";
import NavBar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
            <h1 className="text-5xl font-bold mb-4 text-center">Dragonware</h1>
                <p className="text-zinc-400 text-center p-4">Your digital toolkit for in-person adventures, D&D nights are saved.</p>
    
                <main className="flex gap-8 items-center justify-center">
                    <Card
                        title="Character Sheet"
                        description="Create a hero with our character sheet builder."
                        to="/character"
                    />
                    <Card
                        title="Dice Roller"
                        description="Roll dice and seal your fate. Quick and easy for epic moments."
                        to="/dice"
                    />
                    <Card
                        title="Map Builder"
                        description="Design your world with our intuitive map builder."
                        to="/map"
                    />
                </main>
            </div>
    );
}