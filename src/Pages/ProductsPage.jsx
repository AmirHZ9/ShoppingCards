import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

import { useProducts } from "../Context/ProductsContext";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import Search from "../Components/Search";
import Sidebar from "../Components/Sidebar";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  useEffect(() => {
    setDisplay(products);
    getInitialQuery(searchParams, setQuery);
    setSearch(searchParams.get("search"));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let filteredProducts = searchProducts(products, query.search);
    filteredProducts = filterProducts(filteredProducts, query.category);
    setDisplay(filteredProducts);
  }, [query]);
  return (
    <div className="container mx-auto px-0">
      <Search
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className="w-full pt-5 grid grid-cols-12 gap-4  ">
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
          <Sidebar query={query} setQuery={setQuery} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
