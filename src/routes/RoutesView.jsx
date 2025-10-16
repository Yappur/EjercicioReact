import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Catalogo from "../components/Catalogo.jsx";
import BuscadorUsuarios from "../components/BuscadorUsuarios.jsx";
import MiFormulario from "../components/MiFormulario.jsx";

const RoutesView = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/usuarios" element={<BuscadorUsuarios />} />
        <Route path="/formulario" element={<MiFormulario />} />
      </Routes>
    </>
  );
};
export default RoutesView;
