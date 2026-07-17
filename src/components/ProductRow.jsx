function ProductRow({ product }) {
  const name = product.stocked  // si es true
    ? product.name  // mostra el nombre tal cual viene
    : // sino, mostralo en color rojo
    <span style={{ color: 'red' }}>
      {product.name} 
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;