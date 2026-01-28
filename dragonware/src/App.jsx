import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div>
      <div>
      <h1>Dragonware</h1>
      <p>Your digital bag of holding. Characters, maps, and dice at your fingertips.</p>
      </div>  
      <main className="min-h-screen bg-zinc-950 flex gap-8 items-center justify-center">
        <Card
          title="Character Sheet"
          description="Create, edit, and track your heroes with notes, stats, and gear."
        />
        <Card
          title="Dice Roller"
          description="Roll any dice combo with quick presets for your favorite checks."
        />
        <Card
          title="Map Builder"
          description="Sketch encounter grids and plan terrain for every session."
        />
      </main>
    </div>
  )
}

export default App