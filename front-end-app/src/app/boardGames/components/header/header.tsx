import "./_header.scss";

//* Importing multimedia content.
import logo from "../../../../images/logoBoardGames.png";
import perfil from "../../../../images/IA.png";

export const Header = () => {
  
    return (
        <div className="header">

            { /* Div que contiene todo los elementos del header */ }
            <div className="header__container">

                { /* div que contiene la foto y nombre del usuario */ }
                <div className="header__container__user">
                    <div>
                        <img src={ perfil } alt="" />
                    </div>
                    <h2>Mateo Olaya</h2>
                </div>

                { /* div que contiene el logo */ }
                <div className="header__container__logo">
                    <img src={ logo } alt="" />
                    <h1>BOARDGAMESAI</h1>
                </div>

                { /* div que contiene el botón de cerrar sesión */ }
                <div className="header__container__buttonLogOut">
                    <button>
                        Log Out
                    </button>
                </div>

            </div>

        </div>
    );

}
