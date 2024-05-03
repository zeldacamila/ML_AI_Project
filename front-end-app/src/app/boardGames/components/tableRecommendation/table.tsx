import "./_table.scss";

//* Importing components.
import { CardRecommendation } from "../cardRecommendation/card";

//* Custom hook.
import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";

export const TableRecommendation = () => {
  
    const { recommendationsGames } = useBoardGameStore();

    return (
        <div className="table">

            <h1>Save recommendation</h1>

            { /* Div que contiene las tarjetas guardadas */ }
            <div className="table__cards">
                
                {
                    recommendationsGames.map( ({ creation_date, description, title }) => 
                        <CardRecommendation
                            key={ title }
                            creation_date={ creation_date }
                            title={ title }
                            description={ description }
                        /> 
                    )
                }

            </div>

        </div>
    );

}
