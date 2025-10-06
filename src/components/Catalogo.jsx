import { useState, useEffect } from "react";

const Catalogo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPosts = async () => {
      try {
        const respuesta = await fetch(
          "https://jsonplacehoder.typicode.com/posts?_limit=5"
        );

        if (!respuesta.ok) {
          throw new Error("Error en la respuesta de la red");
        }

        const datos = await respuesta.json();
        setPosts(datos);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener los posts:", error);
      } finally {
        setLoading(false);
      }
    };
    obtenerPosts();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Lista de Posts</h2>
        <p style={{ color: "yellow" }}>Cargando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Lista de Posts</h2>
        <p style={{ color: "red" }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Posts</h2>
      <ol style={{ color: "lightblue" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Catalogo;
