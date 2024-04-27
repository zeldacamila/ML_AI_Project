import "./_dashboard.scss";

//* Components
import { Header } from "../components/header/header";
import { TableRecommendation } from "../components/tableRecommendation/table";
import { ViewEnterData } from "../components/viewEnterData/viewEnterData";
import { ChatAI } from "../components/chatIA/chat";

export const Dashboard = () => {
  
    return (
        <div className="dashboard">

            { /* Componente que tiene el header */ }
            <Header/>

            { /* Div que contiene el dashboard */ }
            <div className="dashboard__container">
                
                { /* Componente que tiene la lógica de la tabla de recomendaciones */ }
                <TableRecommendation/>

                { /* Div que contiene inputs y el chat */ }
                <div className="dashboard__container__inputsChat">

                    { /* Componente que tiene la lógica para ingresar los datos */ }
                    <ViewEnterData/>

                    { /* Componente que tiene la lógica para el chat con la IA */ }
                    <ChatAI/>

                </div>

            </div>

        </div>
    );

}
