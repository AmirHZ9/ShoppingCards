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
    <div className="container mx-auto mobile:px-0">
      <Search
        search={search}
        setSearch={setSearch}
        setQuery={setQuery}
      />
      <div className="w-full pt-5 grid grid-cols-12">
        <div className="col-span-12 tabletPro:col-span-9 order-2">
          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-12">{!display.length && <Loader />}</div>
            {display.map((p) => (
              <div className="col-span-12 mobile:col-span-6 desktop:col-span-4 gap-2   " key={p.id}>
                <Card data={p} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 gap-4 order-1 tabletPro:order-2 tabletPro:col-span-3 tabletPro:mt-5 tabletPro:ml-5   ">
          <Sidebar query={query} setQuery={setQuery} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
