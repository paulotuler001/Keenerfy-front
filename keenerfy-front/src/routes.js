import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewProduct from "./pages/NewProduct";
import ProductDetails from "./pages/ProductDetails";
import PurchaseOrder from "./pages/PurchaseOrder";
import Sales from "./pages/Sales";
import Stock from "./pages/Stock";
import Home from "./pages/Home";
import MyPurchases from "./pages/MyPurchases";
import ForgotPassword from "./pages/ForgotPassword";
import { Context } from "./Context/AuthContext";
import { useContext } from "react";

function AppRoutes() {
  let {authenticated} = useContext(Context);
  // authenticated = true
  console.log(authenticated + "aaa");
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        {authenticated ? (
          <>
            <Route path="/login" element={<Navigate to="/home" replace />} />
            <Route path="/register" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {/* Rotas privadas */}
        {authenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/purchase-order" element={<PurchaseOrder />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/my-purchases" element={<MyPurchases />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
