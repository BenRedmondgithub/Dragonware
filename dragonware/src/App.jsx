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
        <Card title="Character Sheet"/>
        <Card title="Dice Roller"/>
        <Card title="Map Builder"/>
      </main>
    </div>
  )
}

export default App