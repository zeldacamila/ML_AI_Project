//* React Router.
import { Navigate, Route, Routes } from "react-router-dom";

//* Routes for app.
import { AuthRoutes } from "../app/auth/routes/authRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { BoardGamesRoutes } from "../app/boardGames/routes/boardGamesRoutes";

export const AppRouter = () => {
  
    const { status } = useAuthStore();

    return (
        <Routes>

            { /* Esta condición verifica el estado de autenticación para renderizar elementos de la app */

                ( status === "no-authenticated" )
                    ? (
                        <>
                            <Route path="/auth/*" element={ <AuthRoutes/> }/>
                            <Route path="/*" element={ <Navigate to='/auth/login'/> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/boardGames/*" element={ <BoardGamesRoutes/> }/>
                            <Route path="/*" element={ <Navigate to='/boardGames/dashboard'/> } />
                        </>
                    )

            }
            
        </Routes>
    );

}
