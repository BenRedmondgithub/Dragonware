import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DicePage from "./features/dice/DicePage";
import MapPage from "./features/map/MapPage";
import MapBuilderCreate from "./features/map/MapBuilderCreate";
import CharacterPage from "./features/character/CharacterPage";
import CharacterCreate from "./features/character/characterCreate";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dice" element={<DicePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/map-builder-create" element={<MapBuilderCreate />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/character/characterCreate" element={<CharacterCreate />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;