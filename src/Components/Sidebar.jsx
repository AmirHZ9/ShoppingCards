import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import { categories } from "../Constants/list";
function Sidebar({query,setQuery}) {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        setQuery((query) => createQueryObject(query, { category }));
    
        if (tagName == !"Li") return;
      };
  return (
    <div>
         <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
          {categories.map(item => <li key={item.id} className={item.type.toLocaleLowerCase() == query.category ? "bg-base p-3" :null}>{item.type}</li>)}
          </ul>
    </div>
  )
}

export default Sidebar