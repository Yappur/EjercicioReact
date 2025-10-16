import React, { useState } from "react";
const MiFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });
  const [datosMostrados, setDatosMostrados] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleMostrarDatos = () => {
    setDatosMostrados(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim()) {
      alert("El nombre es requerido");
      return;
    }
    if (!formData.email.trim()) {
      alert("El email es requerido");
      return;
    }
    console.log("Datos a enviar:", formData);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF--8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Respuesta del servidor:", json);
        alert(`¡Enviado! ID: ${json.id}`);
        setFormData({
          nombre: "",
          email: "",
        });
        setDatosMostrados(null);
      })
      .catch((error) => console.error("Error al enviar:", error));
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <button
          type="button"
          onClick={handleMostrarDatos}
          style={{ marginRight: "10px" }}
        >
          Mostrar Datos
        </button>
        <button type="submit">Enviar</button>
      </form>
      {datosMostrados && (
        <div
          style={{ marginTop: "2rem", padding: "1rem", background: "#F4F4F9" }}
        >
          <h3>Datos Ingresados:</h3>
          <p>
            <strong>Nombre:</strong> {datosMostrados.nombre}
          </p>
          <p>
            <strong>Email:</strong> {datosMostrados.email}
          </p>
        </div>
      )}
    </div>
  );
};
export default MiFormulario;
