import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DicePage from "./features/dice/DicePage";
import MapPage from "./features/map/MapPage";
import MapBuilderCreate from "./features/map/MapBuilderCreate";
import MapBuilderEditPage from "./features/map/MapBuilderEditPage";
import MapListPage from "./features/map/MapListPage";
import CharacterPage from "./features/character/CharacterPage";
import CharacterCreatePage from "./features/character/CharacterCreatePage";
import CharacterEditPage from "./features/character/CharacterEditPage";
import CharacterListPage from "./features/character/characterListPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Characters from "./components/characters";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dice" element={<DicePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/map-lists" element={<MapListPage />} />
      <Route path="/map/:id" element={<MapBuilderEditPage />} />
      <Route path="/character/characterList" element={<CharacterListPage />} />
      <Route path="/character/characterCreate" element={<CharacterCreatePage />} />
      <Route path="/character/:id" element={<CharacterEditPage />} />
      <Route path="/map-builder-create" element={<MapBuilderCreate />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;