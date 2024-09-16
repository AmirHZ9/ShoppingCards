import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import { categories } from "../Constants/list";
import styles from "./sidebar.module.css"
function Sidebar({query,setQuery}) {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        setQuery((query) => createQueryObject(query, { category }));
    
        if (tagName == !"Li") return;
      };
  return (
    <div className="border-dashed border-2 border-border bg-white p-3 rounded-lg">
         <div className="flex items-center text-base font-semibold">
            <FaListUl />
            <p className="ml-2">Categories</p>
          </div>
          <ul onClick={categoryHandler}>
          {categories.map(item => <li key={item.id} className={item.type.toLocaleLowerCase() == query.category ?styles.selectedCategory :styles.notSelectedCategory}>{item.type}</li>)}
          </ul>
    </div>
  )
}

export default Sidebar