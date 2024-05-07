//* React Router.
import { BrowserRouter } from "react-router-dom";

//* Importing main routes
import { AppRouter } from "./router/appRouter";

export const BoardGamesApp = () => {
  
    return (
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
    );

}
