//* Importing data for inputs.
import { InputSelect } from "./data/data";

//* Types.
import { typeDataInputSelects } from "../../../../types/interface";

//* Custom hook.
import { useForm } from "../../../../hooks/useForm";

export const useViewEnterData = () => {
  
    //* Attributes.
    const dataInputSelects: typeDataInputSelects[] = [
        InputSelect.convertFormatData( "Máximo jugadores", "max_players" ),
        InputSelect.convertFormatData("Mínimo jugadores", "min_players"),
        InputSelect.convertFormatData("Tiempo máximo", "max_time"),
        InputSelect.convertFormatData("Tiempo mínimo", "min_time"),
        InputSelect.convertFormatData("Tiempo de juego", "time_play"),
        InputSelect.convertFormatData("Año publicación", "publisher"),
        InputSelect.convertFormatData("Calificación juego", "average"),
        InputSelect.convertFormatData("Edad jugadores", "min_age")
    ];

    const { onInputChangeSelect, stateForm } = useForm({
        max_players: 0,
        min_players: 0,
        max_time: 0,
        min_time: 0,
        time_play: 0,
        publisher: 0,
        average: 0,
        min_age: 0
    });

    //* Methods.
    const onHandleStart = () => {
        console.log( stateForm );
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
