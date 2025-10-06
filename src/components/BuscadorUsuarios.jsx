import React, { useState } from "react";

const BuscadorUsuarios = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const respuesta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!respuesta.ok) {
        throw new Error("Error en la respuesta de la red");
      }

      const datos = await respuesta.json();
      setUser(datos);
    } catch (error) {
      console.error("Error al buscar el usuario:", error);
      setError("No se pudo obtener el usuario. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Buscador de Usuarios</h2>
      <div className="buscador">
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {loading && <p style={{ color: "yellow" }}>Buscando usuario...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Ciudad: {user.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default BuscadorUsuarios;
