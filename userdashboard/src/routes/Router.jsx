import { BrowserRouter, Routes,Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import SignupForm from "../pages/Signup";
import Forgetpassword from "../pages/Forgetpassword";
import Errorpage from "../pages/Errorpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <BrowserRouter>
     <ToastContainer autoClose={5000}/>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
        <Route path="*" element={<Errorpage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
