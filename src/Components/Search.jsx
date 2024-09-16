
import { FaSearch } from "react-icons/fa";

function Search({search,setSearch,searchHandler}) {
  return (
    <div className="flex justify-start items-center">
        <input
          type="text"
          value={search}
          placeholder="search . . ."
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          className="bg-white p-2 border-base border-2 mr-1 border-dashed rounded-lg h-8 outline-none text-base"
        />
        <button onClick={searchHandler} className="bg-base text-white rounded-lg h-8 p-2">
          <FaSearch />
        </button>
      </div>
  )
}

export default Search