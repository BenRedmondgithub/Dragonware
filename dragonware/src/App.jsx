import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterPage from "./features/character/CharacterPage";
import DicePage from "./features/dice/DicePage";
import MapPage from "./map/MapPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/dice" element={<DicePage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default App;