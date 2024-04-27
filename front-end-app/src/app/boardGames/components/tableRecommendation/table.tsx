import "./_table.scss";

//* Importing components.
import { CardRecommendation } from "../cardRecommendation/card";

export const TableRecommendation = () => {
  
    return (
        <div className="table">

            <h1>Save recommendation</h1>

            { /* Div que contiene las tarjetas guardadas */ }
            <div className="table__cards">
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
                <CardRecommendation/>
            </div>

        </div>
    );

}
