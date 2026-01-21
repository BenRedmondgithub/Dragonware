import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div>
      <h1>Dragonware</h1>
      <p>Welcome to Dragonware, your ultimate software solution!</p>
      <main className="min-h-screen bg-zinc-950 flex gap-8 items-center justify-center">
        <Card title="Character"/>
        <Card title="Dice" />
        <Card title="Map" />
      </main>
    </div>
  )
}

export default App