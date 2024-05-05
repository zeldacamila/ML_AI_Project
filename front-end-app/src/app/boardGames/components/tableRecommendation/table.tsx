import "./_table.scss";

//* Importing components.
import { CardRecommendation } from "../cardRecommendation/card";

//* Custom hook.
import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";
import { Loading } from "../../../components/loading/loading";

export const TableRecommendation = () => {
  
    const { recommendationsGames, isLoadingRecommendation } = useBoardGameStore();

    return (
        <div className="table">

            <h1>Save recommendation</h1>

            { /* Div que contiene las tarjetas de recomendaciones guardadas */ }
            <div className="table__cards">
                
                {
                    ( isLoadingRecommendation )
                    ? <Loading/>
                    : recommendationsGames.map( ({ creation_date, description, title }, i) => 
                        <CardRecommendation
                            key={ i }
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
