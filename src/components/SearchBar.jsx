function SearchBar({
  filterText, 
  setFilterText,
  inStockOnly, 
  setInStockOnly
}) {

  return (
    <form>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        Mostrar solo productos en stock
      </label>
    </form>
  );
}

export default SearchBar