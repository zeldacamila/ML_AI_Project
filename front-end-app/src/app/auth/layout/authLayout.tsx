import "./_authLayout.scss";

//* Importing multimedia content
import logo from "../../../images/logoBoardGames.png";
import { ReactNode } from "react";

interface PropsAuthLayout {
    children: ReactNode
}

export const AuthLayout = ( { children }: PropsAuthLayout ) => {
  
    return (
        <div className="authLayout">

            { /* Div que contiene el logo */ }
            <div className="authLayout__logo">
                <img src={ logo } alt="" />
            </div>

            { /* Div que contiene el título y el subtítulo */ }
            <div className="authLayout__texts">
                
                <div className="authLayout__texts__title">

                    <h1>Your Favorite</h1>
                    <h1>Amazing Board Games</h1>

                </div>

                <div className="authLayout__texts__subtitle">
                    <p>
                        Find all kinds of board games that you want to play 
                        with your family and friends
                    </p>
                </div>
                
            </div>

            { /* Children donde se colocaran otras cosas */ }

            { children }

        </div>
    );

}
