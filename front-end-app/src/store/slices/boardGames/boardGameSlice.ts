import { createSlice } from "@reduxjs/toolkit";

//* Types.
import { BoardGamesSlice } from "../../../types/interface";

const initialState: BoardGamesSlice = {
    isLoading: false,
    dataMachineLearningModel: {}, //* Se guardan los datos para el modelo. 
    recommendationsGames: [], //* Se guardan todas las recomendaciones.
    contentTextsChat: [], //* Se guardan todos los texto generados tanto de la IA como del usuario.
    error: undefined,
}

export const boardGameSlice = createSlice({
    name: 'boardGames',
    initialState,
    reducers: {
        onUpdateContentChat: ( state, { payload } ) => {
            state.contentTextsChat = [ ...state.contentTextsChat, payload ];
        }
    }
});

export const { onUpdateContentChat } = boardGameSlice.actions;