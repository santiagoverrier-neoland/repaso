import { useEffect, useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  const [PRODUCTS, setProducts] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    async function obtenerProductos() {
      try {
        // Obtener mediante fetch
        const respuesta = await fetch("/api.json");
        const datos = await respuesta.json();

        setProducts(datos);
        setCargando(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    obtenerProductos();
  }, []);

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <h1>Productos</h1>
      {cargando ? <p>Cargando...</p> : <FilterableProductTable products={PRODUCTS} /> }
    </>
  );
}

export default App;
