import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="" Component={Home} />
          <Route path="cart" Component={CartPage} />
          <Route path="product">
            <Route path=":id" Component={ProductDetails} /> 
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
