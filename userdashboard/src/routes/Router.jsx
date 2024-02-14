import { BrowserRouter, Routes,Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import SignupForm from "../pages/Signup";
import Forgetpassword from "../pages/Forgetpassword";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
