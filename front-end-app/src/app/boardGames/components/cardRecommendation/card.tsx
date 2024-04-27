import "./_card.scss";

//* Importing content multimedia
import iconBoardGame from "../../../../images/joya.png";

export const CardRecommendation = () => {
    
    return (
        <div className="card">

            { /* Div que la imagen de la tarjeta */ }
            <div className="card__image">
                <img src={ iconBoardGame } alt="" />
            </div>

            { /* Div que contiene el título y fecha de la tarjeta */ }
            <div className="card__title">
                <h2>Juegos strategy</h2>
                <h3>20-04-2024</h3>
            </div>

        </div>
    );

}
