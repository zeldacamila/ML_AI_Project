//* React router.
import { Navigate, Route, Routes } from "react-router-dom";

//* Pages.
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";

export const AuthRoutes = () => {
  
    return (
        <Routes>
            
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>

            <Route path="/*" element={ <Navigate to='/auth/login'/> }/>

        </Routes>
    );

}
