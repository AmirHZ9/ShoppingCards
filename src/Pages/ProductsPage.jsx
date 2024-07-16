import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductsContext";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import {
  createQueryObject,
  filterProducts,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSeach] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const serachHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
    if (tagName !== "LI") return;
  };

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProduct = searchProducts(products, query.search);
    finalProduct = filterProducts(finalProduct, query.category);
    setDisplayed(finalProduct);
  }, [query]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSeach(e.target.value.toLowerCase().trim())}
        />
        <button onClick={serachHandler}>
          <FaSearch />
        </button>
      </div>
      <div className="w-full pt-5 grid grid-cols-12 gap-4 container mx-auto">
        <div className="col-span-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">{!displayed.length && <Loader />}</div>
            {displayed.map((p) => (
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
