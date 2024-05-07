import { createSlice } from "@reduxjs/toolkit";

//* Types.
import { BoardGamesSlice } from "../../../types/interface";

const initialState: BoardGamesSlice = {
    isLoading: false,
    isLoadingRecommendation: false,
    dataMachineLearningModel: {}, //* Se guardan los datos para el modelo. 
    recommendationsGames: [], //* Se guardan todas las recomendaciones.
    contentTextsChat: [], //* Se guardan todos los texto generados tanto de la IA como del usuario.
    error: undefined,
}

export const boardGameSlice = createSlice({
    name: 'boardGames',
    initialState,
    reducers: {
        onLoadingBoardGames: ( state ) => {
            state.isLoading = true;
        },
        onLoadingRecommendation: ( state ) => {
            state.isLoadingRecommendation = true;
        },
        onUpdateContentChat: ( state, { payload } ) => {
            state.contentTextsChat = [ ...state.contentTextsChat, payload ];
            state.isLoading = false;
        },
        onLoadRecommendations: ( state, { payload } ) => {
            state.recommendationsGames = [ ...state.recommendationsGames, ...payload ];
            state.isLoadingRecommendation = false;
        },
        onResetBoardGameSlice: ( state ) => {
            state.isLoading = false;
            state.dataMachineLearningModel = {};
            state.recommendationsGames = [];
            state.contentTextsChat = [];
            state.error = undefined;
        },
        onErrorBoardGame: ( state ) => {
            state.isLoading = false;
        }
    }
});

export const {
    onLoadingBoardGames,
    onLoadingRecommendation, 
    onUpdateContentChat, 
    onResetBoardGameSlice, 
    onLoadRecommendations,
    onErrorBoardGame 
} = boardGameSlice.actions;