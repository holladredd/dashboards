import { BrowserRouter, Routes,Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import SignupForm from "../pages/Signup";
import Home from "../pages/home";
import Forgetpassword from "../pages/Forgetpassword";
import Errorpage from "../pages/Errorpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "../pages/Products";
import SingleProduct from './../pages/SingleProduct';
import CreateProduct from "../pages/CreateProduct";

const Router = () => {
  return (
    <BrowserRouter>
     <ToastContainer autoClose={5000}/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}>
        <Route path="/Dashboard" element={<Overview />} />
        <Route path="/Dashboard/Settings" element={<Settings />} />
        <Route path="/Dashboard/Products" element={<Products />} />
        <Route path="/Dashboard/products/:prodid" element={<SingleProduct />} />
        <Route path="/Dashboard/CreateProducts" element={<CreateProduct />} />

        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="*" element={<Errorpage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
