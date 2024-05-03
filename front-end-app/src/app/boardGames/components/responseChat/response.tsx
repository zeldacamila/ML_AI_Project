import "./_response.scss";

//* Content Multimedia.
import iconRobot from "../../../../images/cabeza-robotica.png";
import iconUser from "../../../../images/usuario.png";
import iconSave from "../../../../images/save.png";

//* Components.
import { CardGames } from "./cardGames";

//* Types.
import { typeContextTextsChat } from "../../../../types/type";

//* Custom hook.
import { useResponse } from "./useResponse";

//<h1>BoardGamesAI</h1>

export const ResponseChat = ( { content, nameEntity, type }: typeContextTextsChat ) => {
  
    const { onButtonSaveRecommendation } = useResponse();

    return (
        <div className="responseChat animate__animated animate__fadeIn">

            { /* Div que contiene la foto de la respuesta y el botón guardar */ } 
            <div className="responseChat__photoButton">

                { /* Div que tiene la foto del usuario o la IA */ } 
                <div>
                    <img src={ ( type === "user" ) ? iconUser : iconRobot } alt="" />
                </div>

                { /* Botón para guardar el contenido si fue enviado por la IA */ } 
                { ( type !== 'user' ) &&  <div onClick={ onButtonSaveRecommendation }> <img src={ iconSave } alt="" /> </div> }

            </div>

            { /* Div que tiene el contenido texto y tarjetas */ }
            { /* TODO: hay que mirar el tipo de usuario para mostrar las tarjetas o no */ }  
            <div className="responseChat__textContent">

                <h1>{ nameEntity }</h1>
                
                <p> { content } </p> 

                { 
                    ( type !== 'user' ) && ( 
                        <div className="responseChat__textContent__cardGames">
                            <CardGames nameGame="Juego piratas"/>
                        </div> 
                    )
                }

            </div>

        </div>
    );

}
