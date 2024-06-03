import './FilterStyle.css'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2 className='filterTitle'>Filtrar:</h2>
        <div className='filter-option'>
                <div className='status'>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Todas</option>
                    <option value="completas">Completas</option>
                    <option value="incompletas">Incompletas</option>
                </select>
                </div>
                <div className='ordem'>
                    <p>por ordem alfabética</p>
                    <button onClick={() => setSort('asc')}>maior para menor</button>
                    <button onClick={() => setSort('desc')}>menor para maior</button>
                </div>
        </div>
    </div>
  )
}

export default Filter