import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NewProduct from "./pages/NewProduct"
import ProductDetails from "./pages/ProductDetails"
import PurchaseOrder from "./pages/PurchaseOrder"
import Sales from "./pages/Sales"
import Stock from "./pages/Stock"

function AppRoutes(){
    return (    
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/new-product" element={<NewProduct/>}></Route>
            <Route path="/product-details" element={<ProductDetails/>}></Route>
            <Route path="/purchase-order" element={<PurchaseOrder/>}></Route>
            <Route path="/sales" element={<Sales/>}></Route>
            <Route path="/stock" element={<Stock/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes