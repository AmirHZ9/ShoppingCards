import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductsContext";
function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="w-full pt-5 grid grid-cols-12 container mx-auto">
      <div className="col-span-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">{!products.length && <Loader />}</div>
          {products.map((p) => (
            <div className="col-span-4  max-w-[300px] " key={p.id}>
              <Card data={p} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2">sidebar</div>
    </div>
  );
}

export default ProductsPage;
