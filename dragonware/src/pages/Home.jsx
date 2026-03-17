import Card  from "../components/Card";
import NavBar from "../components/Navbar";

export default function Home() {
    return (
        <div style={{backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px'}}> 
            <h1 style={{fontSize: '48px', textAlign: 'center', marginBottom: '20px'}}>Dragonware Test</h1>
            <p style={{textAlign: 'center', marginBottom: '40px'}}>Your digital bag of holding. Characters, maps, and dice at your fingertips.</p>
    
            <div style={{display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{border: '1px solid white', padding: '20px', textAlign: 'center'}}>
                    <h3>Character Sheet</h3>
                    <p>Create, edit, and track your heroes with notes, stats, and gear.</p>
                </div>
                <div style={{border: '1px solid white', padding: '20px', textAlign: 'center'}}>
                    <h3>Dice Roller</h3>
                    <p>Roll any dice combo with quick presets for your favorite checks.</p>
                </div>
                <div style={{border: '1px solid white', padding: '20px', textAlign: 'center'}}>
                    <h3>Map Builder</h3>
                    <p>Sketch encounter grids and plan terrain for every session.</p>
                </div>
            </div>
        </div>
    );
}