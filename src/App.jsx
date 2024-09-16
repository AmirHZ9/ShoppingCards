import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PageNotFound from "./Pages/404";
import ProductsProvider from "./Context/ProductsContext";
import CartContextProvider from "./Context/CartContext";
import Layout from "./layout/Layout";
function App() {
  return (
    <div className="bg-main py-5">
      <ProductsProvider>
        <CartContextProvider>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/Checkout" element={<CheckoutPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </CartContextProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
