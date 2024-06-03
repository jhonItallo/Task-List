import './SearchStyle.css'

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h2>Pesquisar:</h2>
        <input type="text" required='required' value={search} onChange={(e) => setSearch(e.target.value)} />
        <span>Pesquisar</span>
    </div>
  )
}

export default Search