import Card  from "../components/Card";

export default function Home() {
    return <div>
        <h1>Dragonware</h1>
        <p>Your digital bag of holding. Characters, maps, and dice at your fingertips.</p>

        <main className="min-h-screen bg-zinc-950 flex gap-8 items-center justify-center">
        <Card
          title="Character Sheet"
          description="Create, edit, and track your heroes with notes, stats, and gear."
          to ="/character"
        />
        <Card
            title="Dice Roller"
            description="Roll any dice combo with quick presets for your favorite checks."
            to ="/dice"
        />
        <Card
            title="Map Builder"
            description="Sketch encounter grids and plan terrain for every session."
            to ="/map"
        />
      </main>
    </div>;
}