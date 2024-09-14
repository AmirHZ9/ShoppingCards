import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { useProducts } from "../Context/ProductsContext";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));

    if (tagName == !"Li") return;
  };
  useEffect(() => {
    setDisplay(products);
    getInitialQuery(searchParams, setQuery);
    setSearch(searchParams.get('search'))
  }, [products]);
  
  useEffect(() => {
    setSearchParams(query);
    let filteredProducts = searchProducts(products, query.search);
    filteredProducts = filterProducts(filteredProducts, query.category);
    setDisplay(filteredProducts);
    console.log(query);
  }, [query]);
  return (
    <>
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
      <div className="w-full pt-5 grid grid-cols-12 gap-4 container mx-auto">
        <div className="col-span-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">{!display.length && <Loader />}</div>
            {display.map((p) => (
              <div className="col-span-4  max-w-[300px] " key={p.id}>
                <Card data={p} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 gap-4">
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
