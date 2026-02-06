import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DicePage from "./features/dice/DicePage";
import MapPage from "./map/MapPage";
import CharacterPage from "./features/character/CharacterPage";
import CharacterCreate from "./features/character/characterCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dice" element={<DicePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/character/characterCreate" element={<CharacterCreate />} />
    </Routes>
  );
}

export default App;