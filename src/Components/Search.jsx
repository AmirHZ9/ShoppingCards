
import { FaSearch } from "react-icons/fa";

function Search({search,setSearch,searchHandler}) {
  return (
    <div>
        <input
          type="text"
          value={search}
          placeholder="search . . ."
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <FaSearch />
        </button>
      </div>
  )
}

export default Search