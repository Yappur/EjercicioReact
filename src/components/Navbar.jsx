import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <a href="/">Inicio</a>
      <a href="/catalogo">Catalogo</a>
      <a href="/usuarios">Usuarios</a>
      <a href="/formulario">Mi Formulario</a>
    </div>
  );
};

export default Navbar;
