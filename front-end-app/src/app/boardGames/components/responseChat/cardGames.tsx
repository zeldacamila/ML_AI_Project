import "./_cardGames.scss";

//* Importing content multimedia.
import iconShop from "../../../../images/compra.png";
import iconImagenBroken from "../../../../images/ImageBroken.png";

interface CardGamesOptions {
    nameGame: string;
}

export const CardGames = ( options: CardGamesOptions ) => {
  
    const { nameGame } = options;

    return (
        <div className="cardGames">
            
            <div className="cardGames__photo">
                <div>
                    <img src={ iconShop } alt="" />
                </div>
                <img src={ iconImagenBroken } alt="" />
            </div>

            <div className="cardGames__title">
                <h1>{ nameGame }</h1>
            </div>

        </div>
    );

}
