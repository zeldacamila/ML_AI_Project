//* Importing data for inputs.
import { InputSelect } from "./data/data";

//* Types.
import { typeDataInputSelects } from "../../../../types/interface";

//* Custom hook.
import { useForm } from "../../../../hooks/useForm";
import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";
import { useAuthStore } from "../../../../hooks/useAuthStore";

export const useViewEnterData = () => {
  
    //* Attributes.
    const { onHandleSendDataModelAI, onHandleAddResponseChatAI } = useBoardGameStore();
    
    const dataInputSelects: typeDataInputSelects[] = [
        InputSelect.convertFormatData( "Máximo jugadores", "max_players" ),
        InputSelect.convertFormatData("Mínimo jugadores", "min_players"),
        InputSelect.convertFormatData("Tiempo máximo (min)", "max_playtime"),
        InputSelect.convertFormatData("Tiempo mínimo (min)", "min_playtime"),
        InputSelect.convertFormatData("Tiempo de juego (min)", "playtime"),
        InputSelect.convertFormatData("Año publicación", "year_published"),
        InputSelect.convertFormatData("Calificación juego", "avg_rating"),
        InputSelect.convertFormatData("Edad jugadores", "youngest_player_age")
    ];

    const { onInputChangeSelect, stateForm } = useForm({
        max_players: 0,
        min_players: 0,
        max_playtime: 0,
        min_playtime: 0,
        playtime: 0,
        year_published: 0,
        avg_rating: 0,
        youngest_player_age: 0
    });

    const { user } = useAuthStore();

    //* Methods.
    const onHandleStart = () => {

        //* Añadiendo respuesta del usuario en el chatAI.
        onHandleAddResponseChatAI({
            content: "I want to know board games according to my preferences.",
            nameEntity: user!.username,
            type: "user"
        });

        //* Enviando data al modelo de aprendizaje.
        onHandleSendDataModelAI( stateForm );

    }

    return {
        //* Attributes.
        stateForm,
        dataInputSelects,

        //* Methods.
        onInputChangeSelect,
        onHandleStart
    }

}
