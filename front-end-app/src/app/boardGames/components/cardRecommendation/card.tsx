import "./_card.scss";

//* Importing content multimedia
import iconBoardGame from "../../../../images/joya.png";

//* Types.
import { typeRecommendation } from "../../../../types/type";

export const CardRecommendation = ( { creation_date, title }: typeRecommendation ) => {
    
    // Convertir la cadena en un objeto Date.
    const date = new Date( creation_date! );

    // Obtener los componentes de la fecha.
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const year = date.getFullYear();

    // Formatear la fecha.
    const formattedDate = `${ day.toString().padStart(2, '0') }-${ month.toString().padStart(2, '0') }-${ year }`;
    
    return (
        <div className="card">

            { /* Div que la imagen de la tarjeta */ }
            <div className="card__image">
                <img src={ iconBoardGame } alt="" />
            </div>

            { /* Div que contiene el título y fecha de la tarjeta */ }
            <div className="card__title">
                <h2>{ title }</h2>
                <h3>{ formattedDate }</h3>
            </div>

        </div>
    );

}
