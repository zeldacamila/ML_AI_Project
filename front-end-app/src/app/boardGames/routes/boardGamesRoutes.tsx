import { Route, Routes } from "react-router-dom";

//* Pages.
import { Dashboard } from '../dashboard/dashboard';

export const BoardGamesRoutes = () => {
  
    return (
        <Routes>

            <Route path="/dashboard" element={ <Dashboard/> }/>

        </Routes>
    );

}
