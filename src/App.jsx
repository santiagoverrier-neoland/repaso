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
        setCargando(false);
      }
    }
    obtenerProductos();
  }, []);

  return (
    <>
      <h1>Productos</h1>
      {error && <p>Error: {error}</p>}
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        PRODUCTS.map(function (product) {
          return <div>{product.name} - </div>;
        })
      )}
      {/* <FilterableProductTable products={PRODUCTS} /> */}
    </>
  );
}

export default App;
